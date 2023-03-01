<template>
<!-- Hero Banner Section -->
<section class="hero-banner bg-light py-5 mb-5">
    <div class="container">
        <div class="row row align-items-center">
            <div class="col-lg-5 offset-lg-1 order-lg-1">
                <img src="@/assets/img/hero3pl.jpg" class="img-fluid" alt="Web Development">
            </div>
            <div class="col-lg-6">
                <h1 class="mt-3">3rd Party Logistics</h1>
                <p class="lead text-secondary my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="#" class="btn btn-outline-secondary btn-lg border">Learn More</a>
            </div>
        </div>
    </div>
</section>
  <section>
    <div class="row mt-5">
      <div class="col-md-6 p-5">
        <h3 class="mt-5">Warehouse</h3>
        <p>Beef ribs turkey spare ribs pastrami cupim, venison shoulder boudin ham ball tip. Leberkas andouille jerky hamburger brisket. Biltong pig ham shank t-bone. Flank ground round swine, doner pork loin prosciutto chislic fatback turducken beef ribs frankfurter t-bone kevin capicola pork belly. Ham ball tip cow chicken.</p>
      </div>
      <div class="col-md-6 p-5">
        <img src="@/assets/img/warehouse.jpg" class="img-fluid" alt="...">
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 p-5">
        <img src="@/assets/img/packing.jpg" class="img-fluid" alt="...">
      </div>
      <div class="col-md-6">
        <h3 class="mt-5">Packing</h3>
        <p>Bacon ipsum dolor amet beef biltong venison tongue kevin beef ribs. Pancetta chuck alcatra landjaeger shank. Prosciutto fatback corned beef capicola short loin pork pancetta. Shankle tail pork shoulder. Rump ground round drumstick, jowl capicola kielbasa sausage sirloin pastrami tenderloin tri-tip alcatra biltong strip steak. Andouille chuck tri-tip jerky, meatball sirloin venison chicken meatloaf pork pancetta corned beef pork chop filet mignon jowl. Tenderloin bacon kevin drumstick.</p>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-6 p-5">
        <h3 class="mt-5">Shipping</h3>
        <p>Shankle beef ribs tongue pork chuck, doner venison t-bone hamburger turkey andouille fatback burgdoggen flank capicola. Burgdoggen ball tip frankfurter, turkey short ribs capicola corned beef. Kevin boudin pig spare ribs buffalo filet mignon. Corned beef filet mignon sirloin buffalo kevin landjaeger bresaola alcatra short ribs. Sausage burgdoggen beef, pork chop shank t-bone ground round prosciutto jowl landjaeger sirloin pancetta buffalo picanha. Turducken chuck tail pork beef ribs andouille salami jowl.</p>
      </div>
      <div class="col-md-6 p-5">
        <img src="@/assets/img/shipping.jpg" class="img-fluid" alt="...">
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Home',
  components: {

  }
}
</script>

<style lang="scss" scoped>
  .hero-banner h1 {
    font-size: 48px;
}
.hero-banner .btn {
    position: relative;
    overflow: hidden;
    z-index: 9;
}
.hero-banner .btn-primary {
    color: #2f2f41;
    background-color: rgba(1, 164, 121, 0.1);
    border-color: #01a479;
}
.hero-banner .btn:before {
    content: "";
    background: #ed5561;
    width: 4px;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    -webkit-transition: all 0.5s ease-in-out 0s;
    -moz-transition: all 0.5s ease-in-out 0s;
    -ms-transition: all 0.5s ease-in-out 0s;
    -o-transition: all 0.5s ease-in-out 0s;
    transition: all 0.5s ease-in-out 0s;
}
.hero-banner .btn:hover:before {
    width: 100%;
}
</style>