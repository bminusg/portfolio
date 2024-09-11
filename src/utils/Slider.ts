class Slider {
  direction: "right" | "left";
  items: HTMLElement[];
  txtItems: HTMLElement[];
  slideIDX: number;

  constructor() {
    this.slideIDX = -1;
    this.direction = "right";
    this.items = document.querySelectorAll(
      ".projects--teaser-img"
    ) as unknown as HTMLElement[];
    this.txtItems = document.querySelectorAll(
      ".projects--teaser-txt"
    ) as unknown as HTMLElement[];
  }

  next() {
    this.direction = "right";
    this.slide();
  }

  prev() {
    this.direction = "left";
    this.slide();
  }

  slide() {
    const maxIDX = this.items.length - 1;
    const slideOutItem = this.items[this.slideIDX];

    console.log("SLIDE");

    this.reset();

    if (this.direction === "right") this.slideIDX++;
    else this.slideIDX--;

    if (this.slideIDX < 0) this.slideIDX = maxIDX;
    if (this.slideIDX > maxIDX) this.slideIDX = 0;

    if (slideOutItem)
      slideOutItem.classList.add("slide--out-" + this.direction);

    this.items[this.slideIDX].classList.add("slide--in-" + this.direction);
    this.txtItems[this.slideIDX].classList.add("is--active");
  }

  reset() {
    this.items.forEach((item: HTMLElement) => {
      item.classList.remove(
        "slide--in-left",
        "slide--in-right",
        "slide--out-left",
        "slide--out-right"
      );

      item.offsetHeight;
    });

    this.txtItems.forEach((item: HTMLElement) => {
      item.classList.remove("is--active");
      item.offsetHeight;
    });
  }
}

export default Slider;
