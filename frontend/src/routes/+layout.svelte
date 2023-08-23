<script>
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
 
    inject({ mode: dev ? 'development' : 'production' });
</script>


<style>
:global(*){
    font-family: 'Roboto',sans-serif;
}

:global(body){
    margin: 0;
    padding: 0;
    background-color: rgb(29, 29, 29);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: hidden;
}    
</style>

<slot/>