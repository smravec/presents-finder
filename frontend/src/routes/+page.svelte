<script>
    //Icons
    import FaRegClock from 'svelte-icons/fa/FaRegClock.svelte'
    import MdChatBubbleOutline from 'svelte-icons/md/MdChatBubbleOutline.svelte'
    import GoGift from 'svelte-icons/go/GoGift.svelte'

    //Css
    import './css/start.css'

    let Quiz = [["Question1"],["answer1",'answer1'],["Question2"],["answer2",'answer2','answer2','answer2','answer2','answer2','answer2','answer2']]
    let CurrentQuestion = 0

    let Started = false

</script>


<main id={Started === false ? "layout-start" : ""}>
    
    {#if Started === false }
    <div id="start-container">
    
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

    <div id="description2">
        Fill out a quick 2 min quiz and get personalized gift ideas for someone with the help of ai.  
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

    <button 
    id="start"
    on:click={()=>{
        Started = true
    }}>
        Start
    </button>

    </div>
    {:else}
    <div id="header">
        <div>Question 1/6</div>
        <div>(Select all that apply)</div>
    </div>
    
    <div id="question">Q1. {Quiz[CurrentQuestion]}</div>
    
        <div id="answer-container">
            {#each Quiz[CurrentQuestion + 1] as Answer }
                <button id="answer">{Answer}</button>
            {/each}
        </div>
    
    <button 
    id="submit"
    on:click={()=>{
    if(CurrentQuestion + 2 <= Quiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2}
    else{
        CurrentQuestion = 0
    }}}>
        {#if CurrentQuestion === Quiz.length - 2  }
            Submit
        {:else}
            Next
        {/if}
        
    </button>

    {/if}
    
</main>

<style>
    
main{
    display: flex;
    flex-direction: column;
    align-items: center;
}

#layout-start{
    justify-content: center;
    height: 100vh;
}

#header{
    display: flex;
    width: 100vw;
    justify-content:space-evenly;
    margin-top: 25px;
    padding-bottom: 5px;
    border-bottom: 1px solid rgb(60, 60, 60);
}


#question{
    color: white;
}

#answer-container{
    border-radius: 5px;
    padding: 10px;
    width: 70vw;
    display: flex;
    flex-direction: column;
}

#answer{
    border: 1px solid rgb(60, 60, 60);
    background-color: rgb(34, 34, 34);
    border-radius: 7px;
    margin-top: 20px;
    padding: 10px;

    cursor: pointer;
    color:white
}

#submit{
    border: none;
    border: 1px solid rgb(60, 60, 60);    
    border-radius: 8px;

    font-family: "Oswald";
    font-size: 28px;
    font-weight: 300;

    padding: 2px 20px 2px 20px;
    margin-top: 20px;
    
    width: 20vw;
    min-width: 140px;

    cursor: pointer;

    background-color: #F6C90E;
    color: rgb(29, 29, 29);
    
    /*Glow effect*/
    -webkit-box-shadow:0px 0px 30px 4px rgba(255,238,46,0.33);
    -moz-box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
    box-shadow: 0px 0px 30px 4px rgba(255,238,46,0.33);
}

div{
    color: rgb(255, 255, 255);

}




</style>