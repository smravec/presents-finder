<script>
    //Icons
    import FaRegClock from "svelte-icons/fa/FaRegClock.svelte";
    import MdChatBubbleOutline from "svelte-icons/md/MdChatBubbleOutline.svelte";
    import GoGift from "svelte-icons/go/GoGift.svelte";
    import GoMarkGithub from "svelte-icons/go/GoMarkGithub.svelte";

    //Animation
    import { onMount, onDestroy } from "svelte";
    import { browser } from "$app/environment";

    const words_to_cycle = [
        "friend",
        "relative",
        "partner",
        "neighbor",
        "kid",
        "colleague",
        "acquaintance",
        "companion",
        "peer",
        "classmate",
        "roommate",
        "teammate",
        "buddy",
        "associate",
        "co-worker",
        "comrade",
        "spouse",
        "sibling",
        "parent",
        "child",
        "cousin",
        "uncle",
        "aunt",
        "grandparent",
        "mentor",
        "protégé",
        "playmate",
        "fellow",
        "confidant",
    ];
    let init_word = words_to_cycle[0];
    let current_word_index = 0;
    let deleting_or_typing = false;
    let interval;

    function Type_Word(word_len) {
        deleting_or_typing = true;
        if (word_len === words_to_cycle[current_word_index].length) {
            init_word = words_to_cycle[current_word_index];
            deleting_or_typing = false;
        } else {
            init_word = words_to_cycle[current_word_index].slice(0, word_len);
            setTimeout(
                () => {
                    Type_Word(word_len + 1);
                },
                100 + (Math.floor(Math.random() * 5) + 1) * 30,
            );
        }
    }

    function Delete_Word(word_len) {
        deleting_or_typing = true;
        if (word_len === 1) {
            init_word = "";
            deleting_or_typing = false;
        } else {
            init_word = init_word.slice(0, word_len - 1);
            setTimeout(() => {
                Delete_Word(word_len - 1);
            }, 100);
        }
    }

    function MainLoop() {
        Delete_Word(words_to_cycle[current_word_index].length);
        setTimeout(
            () => {
                current_word_index += 1;
                if (current_word_index >= words_to_cycle.length) {
                    current_word_index = 0;
                }
                clearInterval(interval);
                interval = setInterval(
                    MainLoop,
                    words_to_cycle[current_word_index].length * 250 + 4000,
                );
                Type_Word(1);
            },
            words_to_cycle[current_word_index].length * 100 + 500,
        );
    }

    // Start typing animation when the window is focused
    function startAnimation() {
        if (!interval) {
            interval = setInterval(MainLoop, 2000);
        }
    }

    // Stop typing animation when the window is not focused
    function stopAnimation() {
        clearInterval(interval);
        interval = null;
    }

    onMount(() => {
        if (browser) {
            // Start animation if the window is already focused
            if (document.hasFocus()) {
                startAnimation();
            }

            // Listen for focus and blur events
            window.addEventListener("focus", startAnimation);
            window.addEventListener("blur", stopAnimation);
        }
    });

    onDestroy(() => {
        if (browser) {
            // Cleanup
            stopAnimation();
            window.removeEventListener("focus", startAnimation);
            window.removeEventListener("blur", stopAnimation);
        }
    });
</script>

<main>
    <div id="title-container">
        <div id="gift-icon">
            <GoGift />
        </div>
        <div id="title">Presents Finder</div>
    </div>

    <div id="description1">
        for your <br />
        <div id="animation-container">
            <span id="animation">
                {init_word}
                <span
                    id={deleting_or_typing
                        ? "cursor-deleting-typing"
                        : "cursor"}
                ></span></span
            >
        </div>
    </div>

    <a id="start" href="quiz"> Start </a>

    <div id="usage-container">
        <div id="title2">What it is</div>

        <div id="description2">
            Fill out a quick 2 min quiz and get personalized gift ideas for
            someone with the help of AI<br />
        </div>

        <div id="description2-desktop">
            Fill out a quick 2 min quiz and get personalized gift ideas for
            someone with the help of AI <br />
        </div>

        <div id="icons-container">
            <div id="time-container">
                <div id="clock-icon">
                    <FaRegClock />
                </div>
                <div id="time">2.5 min</div>
            </div>

            <div id="question-container">
                <div id="question-icon">
                    <MdChatBubbleOutline />
                </div>
                <div id="num-of-questions">5 questions</div>
            </div>
        </div>
        <div id="bottom-container">
            <div id="source">
                <div id="source-text">Source</div>
                <a
                    href="https://github.com/smravec/presents-finder"
                    id="source-img"
                >
                    <GoMarkGithub />
                </a>
            </div>
            <div id="technology">
                <div id="technology-text">Framework</div>
                <img id="technology-img" src="/svelte.png" alt="svelte-logo" />
            </div>
        </div>
    </div>
</main>

<style>
    main {
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

    #start {
        font-weight: 400;
        text-decoration: none;
        border: none;
        border: 1px solid rgb(60, 60, 60);
        border-radius: 8px;

        font-size: 26px;
        font-weight: 600;

        padding: 10px 50px 10px 50px;
        margin-top: 40px;
        margin-bottom: 100px;

        background-color: #f6c90e;
        color: rgb(29, 29, 29);

        /*Glow effect*/
        -webkit-box-shadow: 0px 0px 30px 4px rgba(255, 238, 46, 0.33);
        -moz-box-shadow: 0px 0px 30px 4px rgba(255, 238, 46, 0.33);
        box-shadow: 0px 0px 30px 4px rgba(255, 238, 46, 0.33);

        animation: flow 1s;
    }

    @keyframes flow {
        0% {
            opacity: 50%;
            transform: translateX(-20px);
        }

        100% {
            opacity: 100%;
            transform: translateX(0px);
        }
    }

    #start:hover {
        cursor: pointer;
        transition: 250ms;

        /*Glow effect*/
        -webkit-box-shadow: 0px 0px 30px 8px rgba(255, 238, 46, 0.33);
        -moz-box-shadow: 0px 0px 30px 8px rgba(255, 238, 46, 0.33);
        box-shadow: 0px 0px 30px 8px rgba(255, 238, 46, 0.33);
    }

    #gift-icon {
        width: 38px;
        color: #f6c90e;
    }

    #title-container {
        align-items: center;
        display: flex;
        margin-top: 24px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(60, 60, 60);
    }

    #title {
        color: rgb(232, 232, 232);
        font-size: 36px;
        margin-left: 5px;
        user-select: none;
    }

    @keyframes item-loading {
        0% {
            color: transparent;
        }

        100% {
            background-color: transparent;
        }
    }

    #description1 {
        font-weight: 100;
        font-size: 28px;
        margin: 0px 10% 30px 10%;
        text-align: center;
        color: rgb(255, 255, 255);

        animation: item-loading 500ms;
        animation-timing-function: ease-in;
        border-radius: 5px;
        color: #ffffffcc;
    }

    #description2,
    #description2-desktop {
        font-weight: 100;
        font-size: 24px;
        text-align: left;
        color: rgb(135, 135, 135);
        width: fit-content;
        margin: 0px 10px 30px 20px;

        animation: item-loading 500ms;
        animation-timing-function: ease-in;
    }

    #description2-desktop {
        display: none;
    }

    @media screen and (min-width: 1700px) {
        #description2-desktop {
            display: block;
        }

        #description2 {
            display: none;
        }
    }

    #animation-container {
        margin-top: 20px;
        font-weight: 400;
        color: rgb(255, 255, 255);

        animation: item-loading 500ms;
        animation-timing-function: ease-in;
    }

    #animation {
        white-space: nowrap;
        animation: item-loading 500ms;
        animation-timing-function: ease-in;
        font-size: 50px;
    }

    #cursor,
    #cursor-deleting-typing {
        display: inline-block;
        width: 3px;
        height: 45px;
        background-color: rgb(225, 225, 225);
        margin-left: -20px;
        margin-bottom: -2px;
        user-select: none;
    }

    #cursor {
        animation: blink 1500ms steps(1) infinite;
    }

    @keyframes blink {
        50% {
            opacity: 0;
        }
    }

    #title2 {
        font-size: 32px;
        color: rgb(190, 185, 162);

        margin-bottom: 20px;
    }

    #usage-container {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        align-items: center;
        width: 100%;

        background-color: rgb(25, 25, 25);
        padding-top: 20px;
        border-top: 1px solid rgb(41, 41, 41);
        min-height: fit-content;
        padding-bottom: 30px;
    }

    #clock-icon {
        margin-top: 3px;
        width: 24px;
        color: rgb(60, 60, 60);
    }

    #time,
    #num-of-questions {
        margin-left: 6px;
        color: rgb(60, 60, 60);
    }

    #time-container,
    #question-container {
        display: flex;
        align-items: center;
    }

    #question-icon {
        width: 24px;
        color: rgb(60, 60, 60);
        margin-top: 6px;
    }

    #icons-container {
        display: flex;
        width: 80vw;
        margin-top: 10px;
        justify-content: space-around;
    }

    #bottom-container {
        margin-top: 90px;
        width: 100%;
        padding-top: 40px;
        border-top: 1px solid rgb(45, 45, 45);
        display: flex;
        justify-content: space-evenly;
    }

    #source {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #source-text {
        color: rgb(235, 228, 200);
        font-size: 26px;
        text-wrap: nowrap;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(62, 62, 62);
        filter: brightness(80%);
    }

    #source-img {
        height: 80px;
        color: white;
        animation: img-loading 1s;
        filter: brightness(40%);
    }

    #technology {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    #technology-text {
        text-wrap: nowrap;
        color: rgb(235, 228, 200);
        font-size: 26px;
        margin-bottom: 10px;
        border-bottom: 1px solid rgb(62, 62, 62);
        filter: brightness(80%);
    }

    #technology-img {
        height: 80px;
        animation: img-loading 1s;
        filter: brightness(50%);
    }

    @keyframes img-loading {
        0% {
            opacity: 0%;
        }

        100% {
            opacity: 100%;
        }
    }

    @media screen and (min-height: 900px) {
        #bottom-container {
            width: 60vw;
        }
    }
</style>
