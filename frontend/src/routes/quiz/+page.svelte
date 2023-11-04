<script>
    import {Quiz} from '$lib/mvp-analyze.js'
    import { goto } from '$app/navigation';
    
    let CurrentQuestion = 0
    let HowMuchAnswersSelected = 0
    let IndexLastAnswer = -1
    let TempQuiz = [
            // ["Question", true/false able to pick only one], ["Possible Answer", true/false picked or not] 21...
            ["Their age group?",true],[["Child",false],['Teen',false],['Young Adult',false],['Adult',false],['Senior',false]],
            ["Should the gift be more practical or enjoyable?", true],[["More Practical", false],["More Enjoyable", false],["No Preference", false]],
            
            //Longer questions
            ["What type of physical activities do they enjoy?<br/>(Pick all that apply)", false],
            [["Team Sports (e.g., Football, Hockey)", false],
            ["Cycling", false],
            ["Skateboarding", false],
            ["Adrenaline Sports (e.g., Skydiving, Bungee Jumping)", false],
            ["Running", false],
            ["Hands-on Projects (e.g., Tinkering, DIY, Woodworking)", false],
            ["Outdoor Activities (e.g., Hiking, Gardening)", false],
            ["Swimming", false],
            ["Racquet Sports (e.g., Tennis, Ping Pong)", false],
            ["Fitness and Exercise", false],
            ["Other/None", false]],
            
            ["What are their intellectual or creative hobbies?<br/>(Pick all that apply)", false],
            [["Reading (e.g., Fiction, Non-fiction)", false],
            ["Gaming (e.g., Board Games, Video Games)", false],
            ["Anime/Manga", false],
            ["Artistic Activities (e.g., Drawing, Painting, Crafting)", false],
            ["Tech and Gadgets", false],
            ["Puzzle Solving", false],
            ["Photography", false],
            ["Media Consumption (e.g., Movies, TV Shows, Music, Podcasts)", false],
            ["Cooking or Baking", false],
            ["Other/None", false]],

            ["What's the occasion?", true],
            [["Birthday", false],
            ["Christmas", false],
            ["Easter", false],
            ["Anniversary", false],
            ["Nameday", false],
            ["Other/No Specific Occasion", false]]
    ]

    //Animation rerun fix
    let triggerAnimation = 0;
    
    //Scrolling
    function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: define the scrolling behavior
    });
    }
</script>

<main>
    {#key CurrentQuestion}
    <div id="question" key={triggerAnimation}> {@html TempQuiz[CurrentQuestion][0]}</div>
    
        <div id="answer-container">
            {#each TempQuiz[CurrentQuestion + 1] as Answer, index }
                <button 
                key={triggerAnimation}
                id={Answer[1] ? "answer-selected" : "answer"}
                on:click={()=>{
                    if(Answer[1] === false ){
                        if(TempQuiz[CurrentQuestion][1] === true && IndexLastAnswer > -1 ){
                            TempQuiz[CurrentQuestion + 1][IndexLastAnswer][1] = false
                            HowMuchAnswersSelected -= 1
                        }
                        HowMuchAnswersSelected += 1
                        IndexLastAnswer = index
                        Answer[1] = true
                    }
                    else if(Answer[1] === true){
                        HowMuchAnswersSelected -= 1
                        Answer[1] = false
                        IndexLastAnswer = -1
                    }
                }}>
                    {Answer[0]}
                </button>
            {/each}
        </div>
    
    <button 
    disabled={HowMuchAnswersSelected > 0 ? false : true}
    id="submit"
    on:click={()=>{
    if(CurrentQuestion + 2 <= TempQuiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2;HowMuchAnswersSelected = 0;IndexLastAnswer=-1;triggerAnimation++;scrollToTop()}
    else{
        Quiz.set(TempQuiz)
        goto("/results")
    }}}>
        {#if CurrentQuestion === TempQuiz.length - 2  }
            Evaluate
        {:else}
            Next
        {/if}
        
    </button>
    {/key}
</main>

<style>
main{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#question{
    color: white;
    margin-top: 18px;
    font-size: 28px;
    text-align: center;

    user-select: none;

    animation: item-loading 350ms;
    animation-timing-function: ease-in;

    border-bottom: 1px solid rgb(76, 76, 76);
    padding-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
}

@keyframes item-loading{
    0%{
        opacity: 0%;
        transform: translateX(-10px);
    }

    100%{
        opacity: 100%;
        transform: translateX(0px);
    }
}

#answer-container{
    border-radius: 5px;
    padding: 10px;
    width: 70vw;
    display: flex;
    flex-direction: column;
}

#answer, #answer-selected{
    -webkit-tap-highlight-color: transparent;

    border: 1px solid rgb(60, 60, 60);
    background-color: rgb(34, 34, 34);
    border-radius: 7px;
    margin-top: 20px;
    padding: 10px;     

    font-family: "Roboto Mono";

    color:white;

    transition: 100ms;
}

#answer{
    animation: text-loading 750ms;
}

@keyframes text-loading{
    0%{
        color: transparent;
    }
    
    100%{
        color: white;
    }
}

#answer:hover, #answer-selected:hover{
    cursor: pointer;
}

#answer-selected{    
    background:  #F6C90E;    
    color: rgb(0, 0, 0);
    font-weight: 800;

    transition: 250ms;

    border: 1px solid rgb(23, 23, 23);
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
}

#submit, #submit:disabled{
    border: none;
    border: 1px solid rgb(60, 60, 60);    
    border-radius: 8px;

    font-family: "Oswald";
    font-size: 28px;
    font-weight: 500;

    padding: 2px 20px 2px 20px;
    margin-top: 20px;
    margin-bottom: 45px;
    
    min-width: 20vw;
    min-width: 140px;

    background-color: #F6C90E;
    color: rgb(29, 29, 29);

    -webkit-tap-highlight-color: transparent;

    transition: 250ms;
    
   /*Glow effect*/ 
    -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
}

#submit:hover{
    cursor: pointer;

    /*Glow effect*/ 
    -webkit-box-shadow:0px 0px 30px 8px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 8px rgba(255,238,46,0.33);
}

#submit:disabled{
    background-color: rgb(27, 27, 27);
    border: 1px solid rgb(32, 32, 32);
    color: rgb(42, 42, 42);

    transition: 100ms;

    cursor: default;

     /*Glow effect*/
    -webkit-box-shadow:none;
    -moz-box-shadow: none;
    box-shadow: none;
}
</style>