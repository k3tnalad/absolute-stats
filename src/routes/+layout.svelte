<script>
    import '../app.css'
</script>

<div class="container">
    <section class="nav">
        <nav>
            <a class="navItem" href="/">
                <p class="navItemText">main/news</p>
            </a>
            <a class="navItem" href="/standings">
                <p class="navItemText">standings</p>
            </a>
            <a class="navItem" href="/fixtures">
                <p class="navItemText">fixtures</p>
            </a>
            <a class="navItem" href="/goalscorers">
                <p class="navItemText">stats</p>
            </a>
        </nav>
    </section>
    <section class="data">
        <slot />
    </section>
</div>

<style>
    section.nav {
        height: auto;
        background: rgb(2,0,36);
        background: linear-gradient(106deg, rgba(2,0,36,1) 0%, rgba(61,25,91,1) 46%, rgba(0,212,255,1) 100%); 
        padding: .5em;
        color: aliceblue;
        font-weight: 500;
        text-align: center;
    }
    nav > a:hover {
        color: coral;
    }
</style>