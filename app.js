new Vue({
  el: "#app",
  data() {
    return {
      isOpenedTop: true,
      items: [
        {
          img1: "images/sample1.jpg",
          img2: "images/sample2.jpg",
          img3: "images/sample3.jpg",
          title: "Sample Page",
          isOpen: false,
        }
      ],
    };
  },
  methods: {
    topOpen() {
      this.isOpenedTop = !this.isOpenedTop;
    },
    open(idx, isOpen) {
      if (this.isOpenedTop) {
        this.items[idx].isOpen = !isOpen;
      }
    },
    reset() {
      this.items.forEach((item) => (item.isOpen = false));
      this.isOpenedTop = false;
    },
  },
});
