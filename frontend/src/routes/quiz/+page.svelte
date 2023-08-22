<script>

    let Quiz = [["Question1"],["answer1",'answer1'],["Question2"],["answer2",'answer2']]
    let CurrentQuestion = 0

</script>


<main>
    <div>Progress bar</div>
    
    <div>Question 1/6</div>

    
    <div id="question">{Quiz[CurrentQuestion]}</div>

    <div id="answer-container">
        {#each Quiz[CurrentQuestion + 1] as Answer }
            <div>{Answer}</div>
        {/each}
    </div>

    <button 
    id="submit"
    on:click={()=>{
    if(CurrentQuestion + 2 <= Quiz.length - 1)
    {CurrentQuestion = CurrentQuestion + 2}}}>
        Next
    </button>

</main>

<style>
    
main{
    display: flex;
    flex-direction: column;
    align-items: center;
}


#question{
    color: white;

}

#submit{
    border: none;
    border: 1px solid rgb(63, 63, 63);
    
    border-radius: 5px;


    font-size: 34px;
    padding: 5px 20px 5px 2  0px;

    border: 1px solid rgb(63, 63, 63);
    background-color: rgb(255, 200, 0);
}

div{
    color: rgb(255, 255, 255);

}




</style>