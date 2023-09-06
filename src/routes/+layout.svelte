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
        background-color: #444;
        padding: .5em;
        color: #FFF1D0;
        font-weight: 500;
        text-align: center;
    }
    nav > a:hover {
        color: coral;
    }
</style>