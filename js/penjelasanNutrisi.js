  gsap.registerPlugin(ScrollTrigger);

  const boxItem = gsap.utils.toArray(".box-item");
  const leftItem = gsap.utils.toArray(".left-item");
  const nutrientsItem = gsap.utils.toArray(".nutrients-item");
  const textLeftHeader = gsap.utils.toArray('.animLeftHeader');
  const textLeftContent = gsap.utils.toArray('.animLeftContent');
  const textLeftBenefit = gsap.utils.toArray('.animLeftBenefit');
  const textLeftDailyIntake = gsap.utils.toArray('.animLeftDailyIntake');
  const textRight = gsap.utils.toArray('.animRight');
  const loadText = (index) => {
    gsap.to(textLeftHeader[index], {
      y: 10,
      duration: 2,
      opacity: 1,
      stagger: .10,
      ease: "elastic",
    });
    gsap.to(textLeftContent[index], {
      y: 15,
      duration: 2,
      opacity: 1,
      stagger: .10,
      ease: "elastic",
    });
    gsap.to(textRight[index], {
      y: 10,
      duration: 2,
      opacity: 1,
      stagger: .10,
      ease: "elastic"
    });
    gsap.to(textLeftBenefit[index], {
      y: 20,
      duration: 2,
      opacity: 1,
      stagger: .10,
      ease: "elastic"
    });
    gsap.to(textLeftDailyIntake[index], {
      y: 25,
      duration: 2,
      opacity: 1,
      stagger:.10,
      ease: "elastic"
    });
  };

  const updateItems = (index) => {
    leftItem.forEach(item => item.classList.add('hidden'));
    nutrientsItem.forEach(item => item.classList.add('hidden'));
    leftItem[index].classList.remove('hidden');
    nutrientsItem[index].classList.remove('hidden');
  };

  gsap.to(boxItem, {
    yPercent: -100 * (boxItem.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: '#penjelasanNutrisi',
      start: 'top top',
      end: 'bottom+=1000',
      pin: true,
      scrub: 4,
      snap: {
        snapTo: 1 / (boxItem.length - 1),
        duration: .2,
        ease: 'power4.out'
      },
      onUpdate: (self) => {
        const index = Math.round(self.progress * (boxItem.length - 1));
        updateItems(index)
        loadText(index)
      },
    }
  })