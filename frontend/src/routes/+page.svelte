<script>
    //Icons
    import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte'
    import MdChatBubbleOutline from 'svelte-icons/md/MdChatBubbleOutline.svelte'
    import GoGift from 'svelte-icons/go/GoGift.svelte'

    //TODO on this page
    /*
    - Make it responsive for desktop
    - Make the animation for the word friend which retypes itself into other words
    - Add on load animations to other elements
    */

</script>


<main>    
    
    <div id="title-container">
        <div id="gift-icon">
            <GoGift/>
        </div>
        <div id="title">
            Presents Findr
        </div>
    </div>

    <div id="description1">
        Ai tool that helps you find the perfect present
        <span id="animation">
            for your friend
        </span>
    </div>



    <a 
    id="start"
    href="quiz">
        Start
    </a>

    <div id="usage-container">
    
        <div id="title2">
            What it is
        </div>

        <div id="description2">
            Fill out a quick 2 to 3 min quiz and get personalized gift ideas for someone with the help of ai.  
            Presents in any budget, all age ranges, any interests and hobbies...
        </div>

        <div id='icons-container'>

            <div id="time-container">
                <div id="clock-icon">
                    <FaRegClock/>
                </div>
                <div id="time">
                    2.5 min
                </div>
            </div>
        
            <div id="question-container">
                <div id="question-icon">
                    <MdChatBubbleOutline/>
                </div>
                <div id="num-of-questions">
                    6 questions
                </div>
            </div>
            
        </div>

    </div>
    
</main>

<style>

main{
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 6px;
    background-color: rgb(21, 21, 21);
    border: 1px solid rgb(34, 34, 34);

    width: 100vw;
    height: fit-content;
    min-height: 100vh;

}

#start{
    font-weight: 400;
    text-decoration: none;
    border: none;
    border: 1px solid rgb(60, 60, 60);    
    border-radius: 8px;

    font-family: "Oswald";
    font-size: 33px;

    padding: 2px 50px 2px 50px;
    margin-top: 40px;
    margin-bottom: 100px;
    
    cursor: pointer;

    background-color: #F6C90E;
    color: rgb(29, 29, 29);
    
    /*Glow effect*/
    -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
}

#gift-icon{
    width: 38px;
    color: #F6C90E;
}

#title-container{
    align-items: center;
    display: flex;
    margin-top: 24px;
    margin-bottom: 35px;
    border-bottom: 1px solid rgb(60, 60, 60);
}

#title{
    color: rgb(232, 232, 232);
    font-size:  40px;
    margin-left: 10px;
    font-family: "Oswald";
    user-select: none;
}

#description1{
    font-family: "Roboto";
    font-weight: 100;
    font-size: 33px;
    margin: 20px 10% 30px 10%;
    text-align: center;
    color: rgb(255, 255, 255);
}

#description2{
    font-weight: 100;
    font-size: 24px;
    text-align: center ;
    color: rgb(135, 135, 135);
    width: fit-content;
    margin: 0px 20px 30px 20px;
}

#animation{
    font-size: 33px;
    font-weight: 400;
    color: rgb(255, 255, 255);

}

#title2{
    font-family: "Oswald";
    font-size: 32px;
    color: rgb(190, 185, 162);

    margin-bottom: 20px;
}

#usage-container{
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: rgb(25, 25, 25);
    padding-top: 20px;
    border-top: 1px solid rgb(41, 41, 41);
    min-height: 50vh;
    height: fit-content;

}

#clock-icon{
    margin-top: 3px;
    width: 24px;
    color: rgb(60, 60, 60)
}

#time , #num-of-questions{
    margin-left: 6px;
    color: rgb(60, 60, 60);
}

#time-container, #question-container{
    display: flex;
    align-items: center;
}

#question-icon{
    width: 24px;
    color: rgb(60, 60, 60);
    margin-top: 6px;
}

#icons-container{
    display: flex;
    width: 80vw;
    margin-top: 10px;
    justify-content: space-around;
}

</style>