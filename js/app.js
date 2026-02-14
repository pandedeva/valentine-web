document.addEventListener("DOMContentLoaded", () => {
  const yes = document.querySelector("#yes");
  const no = document.querySelector("#no");
  const gif = document.querySelector("#gif");
  const text = document.querySelector("#text");
  const vid = document.querySelector("video");
  const textBox = document.querySelector(".text-one");
  let count = 2;

  const gifs = [
    "resources/cat-heart.gif",
    "resources/rusure.gif",
    "resources/onana.gif",
    "resources/Sad.gif",
    "resources/speed.gif",
    "resources/idc.gif",
  ];

  // 🔥 hanya fade-in ketika source berubah
  gif.style.transition = "opacity 0.3s ease-in-out";

  // preload GIFs
  const preloadGifs = gifs.map((src) => {
    return new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve();
    });
  });

  Promise.all(preloadGifs).then(() => {
    // semua GIF siap, aktifkan event listener
    no.addEventListener("click", () => {
      let src, message;
      let yesHeight, yesWidth, noWidth, noFont;

      switch (count) {
        case 2:
          src = "resources/rusure.gif";
          message = "Kok no????🤨";
          yesHeight = "65%";
          yesWidth = "60%";
          noWidth = "30%";
          break;
        case 3:
          src = "resources/onana.gif";
          message = "Sengajaaa yhhh?🤨🤨🤨";
          yesHeight = "70%";
          yesWidth = "70%";
          noWidth = "20%";
          break;
        case 4:
          src = "resources/Sad.gif";
          message = "Sedihhh 😭😭";
          yesHeight = "80%";
          yesWidth = "80%";
          noWidth = "10%";
          noFont = "4vh";
          break;
        case 5:
          src = "resources/speed.gif";
          message = ":)";
          yesHeight = "90%";
          yesWidth = "96%";
          no.style.display = "none";
          break;
      }

      // fade-in hanya ketika source baru
      gif.style.opacity = 0;
      gif.src = src;
      gif.onload = () => {
        gif.style.opacity = 1;
      };

      text.innerHTML = message;

      if (yesHeight) yes.style.height = yesHeight;
      if (yesWidth) yes.style.width = yesWidth;
      if (noWidth) no.style.width = noWidth;
      if (noFont) no.style.fontSize = noFont;

      count++;
    });

    yes.addEventListener("click", () => {
      vid.style.display = "block";

      // fade-in last picture
      gif.style.opacity = 0;
      gif.src = "resources/lastpic.JPEG";
      gif.onload = () => {
        gif.style.opacity = 1;
      };

      text.innerHTML =
        "Happy Valentine bae, thanks for being in my life, love youu <3. PS: I made this at 5am karna kebangun, so I hope you like it hehe.";
      text.style.fontSize = "1.2rem";

      // geser text ke bawah
      textBox.style.alignItems = "flex-end";
      textBox.style.paddingTop = "150px";

      no.style.display = "none";
      yes.style.display = "none";

      setTimeout(() => {
        vid.style.display = "none";
      }, 9000);
    });
  });
});
