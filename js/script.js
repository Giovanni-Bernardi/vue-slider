function init() {
  new Vue({
    el: ".container",
    data: {
      title: "Vue Slider",
      //img placeholder
      sliderImg: "img/malta.jpg",
      cont: 0,
    },
    mounted: function () {
      setInterval(this.nextImg, 3000);
    },
    methods: {
      nextImg: function () {
        if (this.cont >= 3) {
          this.cont = 0;
        } else {
          this.cont++;
        }
        this.sliderImg = "img/praga.jpg";
      },
      prevImg: function () {
        if (this.cont <= 0) {
          this.cont = 3;
        } else {
          this.cont--;
        }
        this.sliderImg = "img/siviglia.jpg";
      },
    },
  });
}

document.addEventListener("DOMContentLoaded", init);
