import { writable } from 'svelte/store';
import { MvpData } from "./mvp-db"
 
export const Quiz = writable([])

function AssignTags(answers){
    //Physical interests and Mental interests, Age group, Occasion, More enjoy/pract
    let quiz_answers = [[], [], [], []]
    
    //Interests
    //Physical
    for (let index = 0; index < answers[5].length - 1; index++) {
        if(answers[5][index][1] === true){
            quiz_answers[0].push(answers[5][index][0])}
    }
    //Mental
    for (let index = 0; index < answers[7].length - 1; index++) {
        if(answers[7][index][1] === true){
            quiz_answers[0].push(answers[7][index][0])}
    }

    //Age group
    for (let index = 0; index < answers[1].length; index++) {
        if(answers[1][index][1] === true){
            quiz_answers[1].push(answers[1][index][0])}
    }

    //Occasion
    for (let index = 0; index < answers[9].length; index++) {
        if(answers[9][index][1] === true){
            quiz_answers[2].push(answers[9][index][0])}
    }

    //More enjoy/pract
    for (let index = 0; index < answers[3].length; index++) {
        if(answers[3][index][1] === true){
            quiz_answers[3].push(answers[3][index][0])}
    }

    return quiz_answers
}

export function MvpAnalyze(answers){
    // Results 5eur, 10eur, 20eur, 50eur    
    let results = [[], [], [], []]
    const quiz_answers = AssignTags(answers)

    //For each price range
    for (let x = 0; x < 4; x++) {
        // Mvp Data structure
        // Name, Description, [Interest tags], [Age group tags], [Occasion tags], More enjoyable/practical, Gender to receive the gift, Gender to give the gift 
        // ["Book-themed Playing Cards", "Playing cards featuring classic book covers", ["Reading", "Gaming"], ["Child", "Teen"], [], "More enjoyable", "both", "both"],
        // Interest If not elim, Age group tags If not elim, Occasion tags Dont rank yet, More enjoy/pract if not elim, Genders Dont rank yet
        
        //Add all that fit
        for (let item = 0; item < MvpData[x].length; item++) {
            let fit = true 
            
            //Cycle trough all interests if they are in the elem
            MvpData[x][item][2].forEach(element => {
                if(quiz_answers[0].includes(element) === false){
                    fit = false
                }
            })            

            //Check if age group is good
            if(MvpData[x][item][3].includes(quiz_answers[1][0]) === false){
                fit = false
            }
            
            //Check if the gift is more practical/enjoyable  or both
            if(MvpData[x][item][5] != quiz_answers[3][0] && quiz_answers[3][0] != "No Preference"){
                fit = false
            }            

            if(fit === true){
                const item_to_add = [MvpData[x][item][0],MvpData[x][item][1],MvpData[x][item][2]]
                results[x].push(item_to_add)
            }   
        }        
    }

    //If there are more than 3 results for each price category remove the one with one interest
    for (let index = 0; index < results.length; index++) {
        if(results[index].length > 3){
            let max_remove = results[index].length - 3
            for (let i = 0; i < results[index].length; i++) {
                if (results[index][i][2].length === 1 && max_remove > 0) {
                    results[index].splice(i, 1)
                    max_remove--
                    i--
                }
            }
        }
    }
    //If there are more than 3 results for each price category pick random
    for (let index = 0; index < results.length; index++) {
        results[index] = results[index].length > 3 
        ? Array.from({length: 3}, () => results[index].splice(Math.floor(Math.random() * results[index].length), 1)[0]) 
        : results[index];
    }
    
    console.log(results)
    return results
}