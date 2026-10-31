(function () {
  "use strict";

  const subjects = {
    chinese: {
      name: "?????",
      nameZhuyin: "???? ?? ???? ?? ???",
      description: "???????????????",
      descriptionZhuyin: "??? ?? ???? ?????? ???? ??? ?? ???? ??? ??? ?? ???"
    },
    math: {
      name: "?????",
      nameZhuyin: "??? ???? ??? ???? ???",
      description: "????????????????",
      descriptionZhuyin: "?? ??? ??? ??????? ???? ??? ????????? ???? ??? ???? ????"
    },
    english: {
      name: "English 小達人",
      nameZhuyin: "ㄒㄧㄠˇ ㄉㄚˊ ㄖㄣˊ",
      description: "認識英文字母、顏色和常見單字。",
      descriptionZhuyin: "ㄖㄣˋ ㄕˋ ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ、ㄧㄢˊ ㄙㄜˋ ㄏㄜˊ ㄔㄤˊ ㄐㄧㄢˋ ㄉㄢ ㄗˋ。",
      questions: [
        { category: "字母認識", categoryZhuyin: "ㄗˋ ㄇㄨˇ ㄖㄣˋ ㄕˋ", prompt: "大寫字母 B 的小寫是哪一個？", promptZhuyin: "ㄉㄚˋ ㄒㄧㄝˇ ㄗˋ ㄇㄨˇ B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", options: ["d", "b", "p"], optionZhuyin: ["", "", ""], answer: "b", explain: "大寫 B 的小寫是 b。", explainZhuyin: "ㄉㄚˋ ㄒㄧㄝˇ B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ b。" },
        { category: "字母順序", categoryZhuyin: "ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ", prompt: "字母 A、B 之後接著是哪個字母？", promptZhuyin: "ㄗˋ ㄇㄨˇ A、B ㄓ ㄏㄡˋ ㄐㄧㄝ ㄓㄜ˙ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄗˋ ㄇㄨˇ？", options: ["C", "D", "E"], optionZhuyin: ["", "", ""], answer: "C", explain: "英文字母順序是 A、B、C。", explainZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ ㄕˋ A、B、C。" },
        { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "「red」是什麼顏色？", promptZhuyin: "red ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ？", options: ["紅色", "藍色", "綠色"], optionZhuyin: ["ㄏㄨㄥˊ ㄙㄜˋ", "ㄌㄢˊ ㄙㄜˋ", "ㄌㄩˋ ㄙㄜˋ"], answer: "紅色", explain: "red 是紅色。", explainZhuyin: "red ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ。" },
        { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「one」代表數字幾？", promptZhuyin: "one ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["1", "2", "3"], optionZhuyin: ["ㄧ", "ㄦˋ", "ㄙㄢ"], answer: "1", explain: "one 是 1。", explainZhuyin: "one ㄕˋ ㄧ。" },
        { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「cat」是哪一種動物？", promptZhuyin: "cat ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["狗", "貓", "鳥"], optionZhuyin: ["ㄍㄡˇ", "ㄇㄠ", "ㄋㄧㄠˇ"], answer: "貓", explain: "cat 是貓咪。", explainZhuyin: "cat ㄕˋ ㄇㄠ ㄇㄧ。" },
        { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "早上見面時，可以說哪一句？", promptZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ ㄋㄚˇ ㄧˊ ㄐㄩˋ？", options: ["Good morning!", "Good night!", "Goodbye!"], optionZhuyin: ["", "", ""], answer: "Good morning!", explain: "Good morning 是早安。", explainZhuyin: "Good morning ㄕˋ ㄗㄠˇ ㄢ。" },
        { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「book」是什麼？", promptZhuyin: "book ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["書", "筆", "桌子"], optionZhuyin: ["ㄕㄨ", "ㄅㄧˇ", "ㄓㄨㄛ ㄗ˙"], answer: "書", explain: "book 是書本。", explainZhuyin: "book ㄕˋ ㄕㄨ ㄅㄣˇ。" },
        { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "天空常見的顏色是什麼？", promptZhuyin: "ㄊㄧㄢ ㄎㄨㄥ ㄔㄤˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["blue", "pink", "black"], optionZhuyin: ["", "", ""], answer: "blue", explain: "blue 是藍色。", explainZhuyin: "blue ㄕˋ ㄌㄢˊ ㄙㄜˋ。" }
      ]
    }
  };

  const digitZhuyin = ["ㄌㄧㄥˊ", "ㄧ", "ㄦˋ", "ㄙㄢ", "ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ", "ㄑㄧ", "ㄅㄚ", "ㄐㄧㄡˇ"];

  function numberZhuyin(number) {
    if (number < 10) return digitZhuyin[number];
    if (number === 10) return "ㄕˊ";
    if (number < 20) return `ㄕˊ ${digitZhuyin[number - 10]}`;
    const tens = Math.floor(number / 10);
    const ones = number % 10;
    return `${digitZhuyin[tens]} ㄕˊ${ones ? ` ${digitZhuyin[ones]}` : ""}`;
  }

  function createNumberOptions(numbers) {
    return shuffleQuestions(numbers.map(String), numbers.length);
  }

  function makeCountQuestion(number, category, categoryZhuyin) {
    const answer = number + 1;
    const options = createNumberOptions([number - 1, answer, number + 2]);
    return {
      category,
      categoryZhuyin,
      prompt: `${number} 後面的數是幾？`,
      promptZhuyin: `${numberZhuyin(number)} ㄏㄡˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？`,
      options,
      optionZhuyin: options.map((option) => numberZhuyin(Number(option))),
      answer: String(answer),
      explain: `數數時，${number} 後面是 ${answer}。`,
      explainZhuyin: `ㄕㄨˇ ㄕㄨˇ ㄕˊ，${numberZhuyin(number)} ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ${numberZhuyin(answer)}。`
    };
  }

  function makeComparisonQuestion(first, second, category, categoryZhuyin) {
    const answer = Math.max(first, second);
    const other = Math.min(first, second);
    const options = createNumberOptions([answer, other, answer + 1]);
    return {
      category,
      categoryZhuyin,
      prompt: `${first} 和 ${second}，哪個數字比較大？`,
      promptZhuyin: `${numberZhuyin(first)} ㄏㄜˊ ${numberZhuyin(second)}，ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄅㄧˇ ㄐㄧㄠˋ ㄉㄚˋ？`,
      options,
      optionZhuyin: options.map((option) => numberZhuyin(Number(option))),
      answer: String(answer),
      explain: `${answer} 比 ${other} 大，所以答案是 ${answer}。`,
      explainZhuyin: `${numberZhuyin(answer)} ㄅㄧˇ ${numberZhuyin(other)} ㄉㄚˋ，ㄙㄨㄛˇ ㄧˇ ㄉㄚˊ ㄢˋ ㄕˋ ${numberZhuyin(answer)}。`
    };
  }

  function makeArithmeticQuestion(first, second, operator, category, categoryZhuyin) {
    const answer = operator === "+" ? first + second : first - second;
    const operatorWord = operator === "+" ? "加" : "減";
    const operatorZhuyin = operator === "+" ? "ㄐㄧㄚ" : "ㄐㄧㄢˇ";
    const options = createNumberOptions([Math.max(0, answer - 1), answer, answer + 1]);
    return {
      category,
      categoryZhuyin,
      prompt: `算一算：${first} ${operatorWord} ${second} 等於幾？`,
      promptZhuyin: `ㄙㄨㄢˋ ㄧˋ ㄙㄨㄢˋ：${numberZhuyin(first)} ${operatorZhuyin} ${numberZhuyin(second)} ㄉㄥˇ ㄩˊ ㄐㄧˇ？`,
      options,
      optionZhuyin: options.map((option) => numberZhuyin(Number(option))),
      answer: String(answer),
      explain: `${first} ${operatorWord} ${second} 等於 ${answer}。`,
      explainZhuyin: `${numberZhuyin(first)} ${operatorZhuyin} ${numberZhuyin(second)} ㄉㄥˇ ㄩˊ ${numberZhuyin(answer)}。`
    };
  }

  function makeDecompositionQuestion(total, part, category, categoryZhuyin) {
    const answer = total - part;
    const options = createNumberOptions([answer - 1, answer, answer + 1]);
    return {
      category,
      categoryZhuyin,
      prompt: `${total} 可以分成 ${part} 和幾？`,
      promptZhuyin: `${numberZhuyin(total)} ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ${numberZhuyin(part)} ㄏㄜˊ ㄐㄧˇ？`,
      options,
      optionZhuyin: options.map((option) => numberZhuyin(Number(option))),
      answer: String(answer),
      explain: `${part} 和 ${answer} 合起來是 ${total}。`,
      explainZhuyin: `${numberZhuyin(part)} ㄏㄜˊ ${numberZhuyin(answer)} ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ${numberZhuyin(total)}。`
    };
  }

  function makeLengthQuestion(shortLength, longLength) {
    const answer = "尺";
    const options = shuffleQuestions(["尺", "鉛筆", "一樣長"], 3);
    return {
      category: "長短比較",
      categoryZhuyin: "ㄔㄤˊ ㄉㄨㄢˇ ㄅㄧˇ ㄐㄧㄠˋ",
      prompt: `哪個比較長：${shortLength} 公分的鉛筆，還是 ${longLength} 公分的尺？`,
      promptZhuyin: `ㄋㄚˇ ㄍㄜ˙ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ：${numberZhuyin(shortLength)} ㄍㄨㄥ ㄈㄣ ㄉㄜ˙ ㄑㄧㄢ ㄅㄧˇ，ㄏㄞˊ ㄕˋ ${numberZhuyin(longLength)} ㄍㄨㄥ ㄈㄣ ㄉㄜ˙ ㄔˇ？`,
      options,
      optionZhuyin: options.map((option) => option === "尺" ? "ㄔˇ" : option === "鉛筆" ? "ㄑㄧㄢ ㄅㄧˇ" : "ㄧˊ ㄧㄤˋ ㄔㄤˊ"),
      answer,
      explain: `${longLength} 公分比 ${shortLength} 公分長，所以尺比較長。`,
      explainZhuyin: `${numberZhuyin(longLength)} ㄍㄨㄥ ㄈㄣ ㄅㄧˇ ${numberZhuyin(shortLength)} ㄍㄨㄥ ㄈㄣ ㄔㄤˊ，ㄙㄨㄛˇ ㄧˇ ㄔˇ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ。`
    };
  }

  const courseData = {
    english: [
      {
        title: "英文字母和數字",
        titleZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄏㄜˊ ㄕㄨˋ ㄗˋ",
        teaching: "英文字母有大寫和小寫；學會字母順序，也可以認識簡單的數字單字。",
        teachingZhuyin: "ㄧㄥ ㄨㄣˊ ㄗˋ ㄇㄨˇ ㄧㄡˇ ㄉㄚˋ ㄒㄧㄝˇ ㄏㄜˊ ㄒㄧㄠˇ ㄒㄧㄝˇ；ㄒㄩㄝˊ ㄏㄨㄟˋ ㄗˋ ㄇㄨˇ ㄕㄨㄣˋ ㄒㄩˋ，ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄖㄣˋ ㄕˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ。",
        example: "例子：B 的小寫是 b；one 代表數字 1。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：B ㄉㄜ˙ ㄒㄧㄠˇ ㄒㄧㄝˇ ㄕˋ b；one ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄧ。",
        questions: [subjects.english.questions[0], subjects.english.questions[1], subjects.english.questions[3]]
      },
      {
        title: "打招呼和簡單回應",
        titleZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ ㄏㄜˊ ㄐㄧㄢˇ ㄉㄢ ㄏㄨㄟˊ ㄧㄥˋ",
        teaching: "見面時可以說 Hello；早上說 Good morning；要離開時可以說 Goodbye。",
        teachingZhuyin: "ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ ㄎㄜˇ ㄧˇ ㄕㄨㄛ Hello；ㄗㄠˇ ㄕㄤˋ ㄕㄨㄛ Good morning；ㄧㄠˋ ㄌㄧˊ ㄎㄞ ㄕˊ ㄎㄜˇ ㄧˇ ㄕㄨㄛ Goodbye。",
        example: "例子：A：Hello!　B：Hello!",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：",
        questions: [
          subjects.english.questions[5],
          { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "朋友要回家時，哪一句適合說再見？", promptZhuyin: "ㄆㄥˊ ㄧㄡˇ ㄧㄠˋ ㄏㄨㄟˊ ㄐㄧㄚ ㄕˊ，ㄋㄚˇ ㄧˊ ㄐㄩˋ ㄕˋ ㄏㄜˊ ㄕㄨㄛ ㄗㄞˋ ㄐㄧㄢˋ？", options: ["Goodbye!", "Good morning!", "Hello!"], optionZhuyin: ["", "", ""], answer: "Goodbye!", explain: "Goodbye 是道別時說的再見。", explainZhuyin: "Goodbye ㄕˋ ㄉㄠˋ ㄅㄧㄝˊ ㄕˊ ㄕㄨㄛ ㄉㄜ˙ ㄗㄞˋ ㄐㄧㄢˋ。" },
          { category: "打招呼", categoryZhuyin: "ㄉㄚˇ ㄓㄠ ㄏㄨ", prompt: "早上遇見老師，可以說什麼？", promptZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄩˋ ㄐㄧㄢˋ ㄌㄠˇ ㄕ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ ㄕㄣˊ ㄇㄜ˙？", options: ["Good night!", "Good morning!", "Goodbye!"], optionZhuyin: ["", "", ""], answer: "Good morning!", explain: "早上見面時，可以說 Good morning。", explainZhuyin: "ㄗㄠˇ ㄕㄤˋ ㄐㄧㄢˋ ㄇㄧㄢˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄕㄨㄛ Good morning。" }
        ]
      },
      {
        title: "教室用品單字",
        titleZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄩㄥˋ ㄆㄧㄣˇ ㄉㄢ ㄗˋ",
        teaching: "認識教室裡常見物品的英文名稱，例如 book、pencil 和 eraser。",
        teachingZhuyin: "ㄖㄣˋ ㄕˋ ㄐㄧㄠˋ ㄕˋ ㄌㄧˇ ㄔㄤˊ ㄐㄧㄢˋ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄧㄥ ㄨㄣˊ ㄇㄧㄥˊ ㄔㄥ，ㄌㄧˋ ㄖㄨˊ book、pencil ㄏㄜˊ eraser。",
        example: "例子：book 是書；pencil 是鉛筆。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：book ㄕˋ ㄕㄨ；pencil ㄕˋ ㄑㄧㄢ ㄅㄧˇ。",
        questions: [
          subjects.english.questions[6],
          { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「pencil」是什麼？", promptZhuyin: "pencil ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["鉛筆", "書本", "橡皮擦"], optionZhuyin: ["ㄑㄧㄢ ㄅㄧˇ", "ㄕㄨ ㄅㄣˇ", "ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ"], answer: "鉛筆", explain: "pencil 是鉛筆。", explainZhuyin: "pencil ㄕˋ ㄑㄧㄢ ㄅㄧˇ。" },
          { category: "教室單字", categoryZhuyin: "ㄐㄧㄠˋ ㄕˋ ㄉㄢ ㄗˋ", prompt: "「eraser」是什麼？", promptZhuyin: "eraser ㄕˋ ㄕㄣˊ ㄇㄜ˙？", options: ["橡皮擦", "桌子", "書包"], optionZhuyin: ["ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ", "ㄓㄨㄛ ㄗ˙", "ㄕㄨ ㄅㄠ"], answer: "橡皮擦", explain: "eraser 是橡皮擦。", explainZhuyin: "eraser ㄕˋ ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ。" }
        ]
      },
      {
        title: "顏色單字",
        titleZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ",
        teaching: "用顏色單字描述看到的東西：red 是紅色、blue 是藍色、green 是綠色。",
        teachingZhuyin: "ㄩㄥˋ ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ ㄇㄧㄠˊ ㄕㄨˋ ㄎㄢˋ ㄉㄠˋ ㄉㄜ˙ ㄉㄨㄥ ㄒㄧ：red ㄕˋ ㄏㄨㄥˊ ㄙㄜˋ、blue ㄕˋ ㄌㄢˊ ㄙㄜˋ、green ㄕˋ ㄌㄩˋ ㄙㄜˋ。",
        example: "例子：The sky is blue.",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：The sky is blue。",
        questions: [
          subjects.english.questions[2],
          subjects.english.questions[7],
          { category: "顏色單字", categoryZhuyin: "ㄧㄢˊ ㄙㄜˋ ㄉㄢ ㄗˋ", prompt: "「green」是什麼顏色？", promptZhuyin: "green ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄢˊ ㄙㄜˋ？", options: ["綠色", "紅色", "藍色"], optionZhuyin: ["ㄌㄩˋ ㄙㄜˋ", "ㄏㄨㄥˊ ㄙㄜˋ", "ㄌㄢˊ ㄙㄜˋ"], answer: "綠色", explain: "green 是綠色。", explainZhuyin: "green ㄕˋ ㄌㄩˋ ㄙㄜˋ。" }
        ]
      },
      {
        title: "動物單字",
        titleZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ",
        teaching: "看到熟悉的動物時，可以練習說出牠的英文名字。",
        teachingZhuyin: "ㄎㄢˋ ㄉㄠˋ ㄕㄨˊ ㄒㄧˊ ㄉㄜ˙ ㄉㄨㄥˋ ㄨˋ ㄕˊ，ㄎㄜˇ ㄧˇ ㄌㄧㄢˋ ㄒㄧˊ ㄕㄨㄛ ㄔㄨ ㄊㄚ ㄉㄜ˙ ㄧㄥ ㄨㄣˊ ㄇㄧㄥˊ ㄗˋ。",
        example: "例子：cat 是貓；dog 是狗。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：cat ㄕˋ ㄇㄠ；dog ㄕˋ ㄍㄡˇ。",
        questions: [
          subjects.english.questions[4],
          { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「dog」是哪一種動物？", promptZhuyin: "dog ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["狗", "貓", "鳥"], optionZhuyin: ["ㄍㄡˇ", "ㄇㄠ", "ㄋㄧㄠˇ"], answer: "狗", explain: "dog 是狗。", explainZhuyin: "dog ㄕˋ ㄍㄡˇ。" },
          { category: "動物單字", categoryZhuyin: "ㄉㄨㄥˋ ㄨˋ ㄉㄢ ㄗˋ", prompt: "「bird」是哪一種動物？", promptZhuyin: "bird ㄕˋ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄉㄨㄥˋ ㄨˋ？", options: ["鳥", "魚", "兔子"], optionZhuyin: ["ㄋㄧㄠˇ", "ㄩˊ", "ㄊㄨˋ ㄗ˙"], answer: "鳥", explain: "bird 是鳥。", explainZhuyin: "bird ㄕˋ ㄋㄧㄠˇ。" }
        ]
      },
      {
        title: "數字單字",
        titleZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ",
        teaching: "認識英文數字單字，並把單字和數字配對。",
        teachingZhuyin: "ㄖㄣˋ ㄕˋ ㄧㄥ ㄨㄣˊ ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ，ㄅㄧㄥˋ ㄅㄚˇ ㄉㄢ ㄗˋ ㄏㄜˊ ㄕㄨˋ ㄗˋ ㄆㄟˋ ㄉㄨㄟˋ。",
        example: "例子：one 是 1；two 是 2；three 是 3。",
        exampleZhuyin: "ㄌㄧˋ ㄗ˙：one ㄕˋ ㄧ；two ㄕˋ ㄦˋ；three ㄕˋ ㄙㄢ。",
        questions: [
          subjects.english.questions[3],
          { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「two」代表數字幾？", promptZhuyin: "two ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["1", "2", "3"], optionZhuyin: ["ㄧ", "ㄦˋ", "ㄙㄢ"], answer: "2", explain: "two 是 2。", explainZhuyin: "two ㄕˋ ㄦˋ。" },
          { category: "數字單字", categoryZhuyin: "ㄕㄨˋ ㄗˋ ㄉㄢ ㄗˋ", prompt: "「three」代表數字幾？", promptZhuyin: "three ㄉㄞˋ ㄅㄧㄠˇ ㄕㄨˋ ㄗˋ ㄐㄧˇ？", options: ["2", "3", "4"], optionZhuyin: ["ㄦˋ", "ㄙㄢ", "ㄙˋ"], answer: "3", explain: "three 是 3。", explainZhuyin: "three ㄕˋ ㄙㄢ。" }
        ]
      }
    ]
  };

  const curriculumCategories = {
    phonics: { title: "注音拼讀", zhuyin: "ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ" },
    tones: { title: "聲調辨識", zhuyin: "ㄕㄥ ㄉㄧㄠˋ ㄅㄧㄢˋ ㄕˋ" },
    vocabulary: { title: "詞語理解", zhuyin: "ㄘˊ ㄩˇ ㄌㄧˇ ㄐㄧㄝˇ" },
    reading: { title: "閱讀理解", zhuyin: "ㄩㄝˋ ㄉㄨˊ ㄌㄧˇ ㄐㄧㄝˇ" },
    punctuation: { title: "標點符號", zhuyin: "ㄅㄧㄠ ㄉㄧㄢˇ ㄈㄨˊ ㄏㄠˋ" },
    counting: { title: "數數與讀寫", zhuyin: "ㄕㄨˇ ㄕㄨˋ ㄩˇ ㄉㄨˊ ㄒㄧㄝˇ" },
    length: { title: "長度比較", zhuyin: "ㄔㄤˊ ㄉㄨˋ ㄅㄧˇ ㄐㄧㄠˋ" },
    decomposition: { title: "數的分與合", zhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄈㄣ ㄩˇ ㄏㄜˊ" },
    ordering: { title: "順序和多少", zhuyin: "ㄕㄨㄣˋ ㄒㄩˋ ㄏㄜˊ ㄉㄨㄛ ㄕㄠˇ" },
    comparison: { title: "數的大小", zhuyin: "ㄕㄨˋ ㄉㄜ˙ ㄉㄚˋ ㄒㄧㄠˇ" },
    addition: { title: "加法", zhuyin: "ㄐㄧㄚ ㄈㄚˇ" },
    subtraction: { title: "減法", zhuyin: "ㄐㄧㄢˇ ㄈㄚˇ" },
    shapes: { title: "形狀和圖形", zhuyin: "ㄒㄧㄥˊ ㄓㄨㄤˋ ㄏㄜˊ ㄊㄨˊ ㄒㄧㄥˊ" },
    patterns: { title: "圖形規律", zhuyin: "ㄊㄨˊ ㄒㄧㄥˊ ㄍㄨㄟ ㄌㄩˋ" },
    time: { title: "讀鐘錶", zhuyin: "ㄉㄨˊ ㄓㄨㄥ ㄅㄧㄠˇ" },
    application: { title: "生活應用", zhuyin: "ㄕㄥ ㄏㄨㄛˊ ㄧㄥˋ ㄩㄥˋ" }
  };

  function curriculumQuestion(category, prompt, promptZhuyin, options, optionZhuyin, answer, explain, explainZhuyin) {
    return {
      category: category.title,
      categoryZhuyin: category.zhuyin,
      prompt,
      promptZhuyin: alignReadingToText(prompt, promptZhuyin),
      options,
      optionZhuyin: options.map((option, index) => alignReadingToText(option, optionZhuyin[index])),
      answer,
      explain,
      explainZhuyin: alignReadingToText(explain, explainZhuyin)
    };
  }

  function alignReadingToText(text, reading) {
    const syllables = reading.match(/[ㄅ-ㄩ˙ˊˇˋ]+/gu) || [];
    const phoneticSymbols = text.match(/[ㄅ-ㄩ˙ˊˇˋ]+/gu) || [];
    phoneticSymbols.forEach((symbol) => {
      const index = syllables.indexOf(symbol);
      if (index >= 0) syllables.splice(index, 1);
    });
    return syllables.join(" ");
  }

  function curriculumLesson(title, titleZhuyin, teaching, teachingZhuyin, example, exampleZhuyin, questions) {
    return {
      title,
      titleZhuyin: alignReadingToText(title, titleZhuyin),
      teaching,
      teachingZhuyin: alignReadingToText(teaching, teachingZhuyin),
      example,
      exampleZhuyin: alignReadingToText(example, exampleZhuyin),
      questions
    };
  }

  const phonicsQuestions = (topic, topicZhuyin) => [
    curriculumQuestion(
      curriculumCategories.phonics,
      `${topic}的聲符換成ㄇ，會變成哪個音？`,
      `${topicZhuyin} ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄏㄨㄢˋ ㄔㄥˊ ㄇ，ㄏㄨㄟˋ ㄅㄧㄢˋ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？`,
      ["ㄇㄚ", "ㄅㄚ", "ㄉㄚ"], ["", "", ""], "ㄇㄚ",
      "換掉開頭的聲符，後面的韻符不變。", "ㄏㄨㄢˋ ㄉㄧㄠˋ ㄎㄞ ㄊㄡˊ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ，ㄏㄡˋ ㄇㄧㄢˋ ㄉㄜ˙ ㄩㄣˋ ㄈㄨˊ ㄅㄨˋ ㄅㄧㄢˋ。"
    ),
    curriculumQuestion(
      curriculumCategories.tones,
      "ㄇㄚˋ是哪一個聲調？",
      "ㄇㄚˋ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄥ ㄉㄧㄠˋ？",
      ["一聲", "二聲", "四聲"], ["ㄧ ㄕㄥ", "ㄦˋ ㄕㄥ", "ㄙˋ ㄕㄥ"], "四聲",
      "聲調符號ˋ表示第四聲。", "ㄕㄥ ㄉㄧㄠˋ ㄈㄨˊ ㄙˋ ㄅㄧㄠˇ ㄕˋ ㄉㄧˋ ㄙˋ ㄕㄥ。"
    ),
    curriculumQuestion(
      curriculumCategories.phonics,
      "ㄅ和ㄚ合起來，可以拼成哪個音？",
      "ㄅ ㄏㄜˊ ㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄎㄜˇ ㄧˇ ㄆㄧㄣ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？",
      ["ㄅㄚ", "ㄆㄚ", "ㄇㄚ"], ["", "", ""], "ㄅㄚ",
      "聲符ㄅ和韻符ㄚ合起來是ㄅㄚ。", "ㄕㄥ ㄈㄨˊ ㄅ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄅㄚ。"
    )
  ];

  courseData.chinese = [
    curriculumLesson("首冊 1 手拉手", "ㄕㄡˇ ㄘㄜˋ ㄧ ㄕㄡˇ ㄌㄚ ㄕㄡˇ",
      "認識注音符號，練習把聲符和韻符合起來，再聽聽四聲的不同。",
      "ㄖㄣˋ ㄕˋ ㄓㄨˋ ㄧㄣˋ ㄈㄨˊ ㄏㄠˋ，ㄌㄧㄢˋ ㄒㄧˊ ㄅㄚˇ ㄕㄥ ㄈㄨˊ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ，ㄗㄞˋ ㄊㄧㄥ ㄊㄧㄥ ㄙˋ ㄕㄥ ㄉㄜ˙ ㄅㄨˋ ㄊㄨㄥˊ。",
      "例子：拼讀ㄇㄚ，聲調有四種。",
      "ㄌㄧˋ ㄗ˙ ㄆㄧㄣ ㄉㄨˊ ㄕㄥ ㄉㄧㄠˋ ㄧㄡˇ ㄙˋ ㄓㄨㄥˇ。",
      phonicsQuestions("ㄅ和ㄚ合起來", "ㄅ ㄏㄜˊ ㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ")),
    curriculumLesson("首冊 2 排一排", "ㄕㄡˇ ㄘㄜˋ ㄦˋ ㄆㄞˊ ㄧˋ ㄆㄞˊ",
      "練習更換音節開頭的聲符，並分辨第一聲和第四聲。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄍㄥ ㄏㄨㄢˋ ㄧㄣ ㄐㄧㄝˊ ㄎㄞ ㄊㄡˊ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ，ㄅㄧㄥˋ ㄈㄣ ㄅㄧㄢˋ ㄉㄧˋ ㄧ ㄕㄥ ㄏㄜˊ ㄉㄧˋ ㄙˋ ㄕㄥ。",
      "例子：ㄅㄚ的開頭換成ㄆ，會變成ㄆㄚ。",
      "ㄌㄧˋ ㄗ˙ ㄅㄚ ㄉㄜ˙ ㄎㄞ ㄊㄡˊ ㄏㄨㄢˋ ㄔㄥˊ ㄏㄨㄟˋ ㄅㄧㄢˋ ㄔㄥˊ ㄆㄚ。",
      [
        curriculumQuestion(curriculumCategories.phonics, "把ㄉㄚ的ㄉ換成ㄇ，會變成哪個音？", "ㄅㄚˇ ㄉㄚ ㄉㄜ˙ ㄉ ㄏㄨㄢˋ ㄔㄥˊ ㄇ，ㄏㄨㄟˋ ㄅㄧㄢˋ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄇㄚ", "ㄉㄚ", "ㄅㄚ"], ["", "", ""], "ㄇㄚ", "只換開頭的聲符，韻符ㄚ不變。", "ㄓˇ ㄏㄨㄢˋ ㄎㄞ ㄊㄡˊ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ，ㄩㄣˋ ㄈㄨˊ ㄚ ㄅㄨˋ ㄅㄧㄢˋ。"),
        curriculumQuestion(curriculumCategories.tones, "哪一個音有第四聲？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄧㄣ ㄧㄡˇ ㄉㄧˋ ㄙˋ ㄕㄥ？", ["ㄅㄚ", "ㄅㄚˋ", "ㄅㄚˊ"], ["", "", ""], "ㄅㄚˋ",         "ㄅㄚˋ是第四聲。", "ㄅㄚˋ ㄕˋ ㄉㄧˋ ㄙˋ ㄕㄥ。"),
        curriculumQuestion(curriculumCategories.tones, "ㄇㄚ沒有加聲調符號時，讀第幾聲？", "ㄇㄚ ㄇㄟˊ ㄧㄡˇ ㄐㄧㄚ ㄕㄥ ㄉㄧㄠˋ ㄈㄨˊ ㄏㄠˋ ㄕˊ，ㄉㄨˊ ㄉㄧˋ ㄐㄧˇ ㄕㄥ？", ["第一聲", "第二聲", "第四聲"], ["ㄉㄧˋ ㄧ ㄕㄥ", "ㄉㄧˋ ㄦˋ ㄕㄥ", "ㄉㄧˋ ㄙˋ ㄕㄥ"], "第一聲", "沒有標出其他符號時，ㄇㄚ讀第一聲。", "ㄇㄟˊ ㄧㄡˇ ㄅㄧㄠ ㄔㄨ ㄑㄧˊ ㄊㄚ ㄈㄨˊ ㄏㄠˋ ㄕˊ，ㄇㄚ ㄉㄨˊ ㄉㄧˋ ㄧ ㄕㄥ。")
      ]),
    curriculumLesson("首冊 3 來數數", "ㄕㄡˇ ㄘㄜˋ ㄙㄢ ㄌㄞˊ ㄕㄨˇ ㄕㄨˇ",
      "練習保留聲符、替換韻符，並聽辨第一聲和第二聲。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄅㄠˇ ㄌㄧㄡˊ ㄕㄥ ㄈㄨˊ、ㄊㄧˋ ㄏㄨㄢˋ ㄩㄣˋ ㄈㄨˊ，ㄅㄧㄥˋ ㄊㄧㄥ ㄅㄧㄢˋ ㄉㄧˋ ㄧ ㄕㄥ ㄏㄜˊ ㄉㄧˋ ㄦˋ ㄕㄥ。",
      "例子：ㄇㄚ的韻符ㄚ換成ㄧ，可以拼成ㄇㄧ。",
      "ㄌㄧˋ ㄗ˙：ㄇㄚ ㄉㄜ˙ ㄩㄣˋ ㄈㄨˊ ㄚ ㄏㄨㄢˋ ㄔㄥˊ ㄧ，ㄎㄜˇ ㄧˇ ㄆㄧㄣ ㄔㄥˊ ㄇㄧ。",
      [
        curriculumQuestion(curriculumCategories.phonics, "把ㄇㄚ的ㄚ換成ㄧ，會變成哪個音？", "ㄅㄚˇ ㄇㄚ ㄉㄜ˙ ㄚ ㄏㄨㄢˋ ㄔㄥˊ ㄧ，ㄏㄨㄟˋ ㄅㄧㄢˋ ㄔㄥˊ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄇㄧ", "ㄇㄚ", "ㄇㄨ"], ["", "", ""], "ㄇㄧ", "聲符ㄇ不變，把韻符換成ㄧ。", "ㄕㄥ ㄈㄨˊ ㄇ ㄅㄨˋ ㄅㄧㄢˋ，ㄅㄚˇ ㄩㄣˋ ㄈㄨˊ ㄏㄨㄢˋ ㄔㄥˊ ㄧ。"),
        curriculumQuestion(curriculumCategories.tones, "ㄇㄚˊ是哪一個聲調？", "ㄇㄚˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄥ ㄉㄧㄠˋ？", ["第一聲", "第二聲", "第四聲"], ["ㄉㄧˋ ㄧ ㄕㄥ", "ㄉㄧˋ ㄦˋ ㄕㄥ", "ㄉㄧˋ ㄙˋ ㄕㄥ"], "第二聲",         "ㄇㄚˊ是第二聲。", "ㄇㄚˊ ㄕˋ ㄉㄧˋ ㄦˋ ㄕㄥ。"),
        curriculumQuestion(curriculumCategories.phonics, "ㄅ和ㄧ合起來是哪個音？", "ㄅ ㄏㄜˊ ㄧ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄅㄧ", "ㄆㄧ", "ㄅㄚ"], ["", "", ""], "ㄅㄧ", "聲符ㄅ接上韻符ㄧ，拼成ㄅㄧ。", "ㄕㄥ ㄈㄨˊ ㄅ ㄐㄧㄝ ㄕㄤˋ ㄩㄣˋ ㄈㄨˊ ㄧ，ㄆㄧㄣ ㄔㄥˊ ㄅㄧ。")
      ]),
    curriculumLesson("首冊 4 找一找", "ㄕㄡˇ ㄘㄜˋ ㄙˋ ㄓㄠˇ ㄧˋ ㄓㄠˇ",
      "把聲符和韻符放在一起拼讀，並練習第一聲與第三聲。",
      "ㄅㄚˇ ㄕㄥ ㄈㄨˊ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄈㄤˋ ㄗㄞˋ ㄧˋ ㄑㄧˇ ㄆㄧㄣ ㄉㄨˊ，ㄅㄧㄥˋ ㄌㄧㄢˋ ㄒㄧˊ ㄉㄧˋ ㄧ ㄕㄥ ㄩˇ ㄉㄧˋ ㄙㄢ ㄕㄥ。",
      "例子：ㄇㄚˇ的聲符是ㄇ，韻符是ㄚ，聲調是第三聲。",
      "ㄌㄧˋ ㄗ˙：ㄇㄚˇ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄇ，ㄩㄣˋ ㄈㄨˊ ㄕˋ ㄚ，ㄕㄥ ㄉㄧㄠˋ ㄕˋ ㄉㄧˋ ㄙㄢ ㄕㄥ。",
      [
        curriculumQuestion(curriculumCategories.phonics, "ㄍ和ㄨㄚ合起來是哪個音？", "ㄍ ㄏㄜˊ ㄨㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄍㄨㄚ", "ㄎㄨㄚ", "ㄏㄨㄚ"], ["", "", ""], "ㄍㄨㄚ", "聲符ㄍ接上韻符ㄨㄚ，拼成ㄍㄨㄚ。", "ㄕㄥ ㄈㄨˊ ㄍ ㄐㄧㄝ ㄕㄤˋ ㄩㄣˋ ㄈㄨˊ ㄨㄚ，ㄆㄧㄣ ㄔㄥˊ ㄍㄨㄚ。"),
        curriculumQuestion(curriculumCategories.tones, "ㄇㄚˇ是哪一個聲調？", "ㄇㄚˇ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄥ ㄉㄧㄠˋ？", ["第一聲", "第三聲", "第四聲"], ["ㄉㄧˋ ㄧ ㄕㄥ", "ㄉㄧˋ ㄙㄢ ㄕㄥ", "ㄉㄧˋ ㄙˋ ㄕㄥ"], "第三聲",         "ㄇㄚˇ是第三聲。", "ㄇㄚˇ ㄕˋ ㄉㄧˋ ㄙㄢ ㄕㄥ。"),
        curriculumQuestion(curriculumCategories.phonics, "ㄌ和ㄨ合起來是哪個音？", "ㄌ ㄏㄜˊ ㄨ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄌㄨ", "ㄋㄨ", "ㄌㄚ"], ["", "", ""], "ㄌㄨ", "聲符ㄌ接韻符ㄨ，拼成ㄌㄨ。", "ㄕㄥ ㄈㄨˊ ㄌ ㄐㄧㄝ ㄩㄣˋ ㄈㄨˊ ㄨ，ㄆㄧㄣ ㄔㄥˊ ㄌㄨ。")
      ]),
    curriculumLesson("首冊 5 雨來了", "ㄕㄡˇ ㄘㄜˋ ㄨˇ ㄩˇ ㄌㄞˊ ㄌㄜ˙",
      "熟練聲符、韻符和四個聲調，聽音後選出相同的音節。",
      "ㄕㄨˊ ㄌㄧㄢˋ ㄕㄥ ㄈㄨˊ、ㄩㄣˋ ㄈㄨˊ ㄏㄜˊ ㄙˋ ㄍㄜ˙ ㄕㄥ ㄉㄧㄠˋ，ㄊㄧㄥ ㄧㄣ ㄏㄡˋ ㄒㄩㄢˇ ㄔㄨ ㄒㄧㄤ ㄊㄨㄥˊ ㄉㄜ˙ ㄧㄣ ㄐㄧㄝˊ。",
      "例子：ㄅㄚ、ㄅㄚˊ、ㄅㄚˇ、ㄅㄚˋ的聲調各不相同。",
      "ㄌㄧˋ ㄗ˙：ㄅㄚ、ㄅㄚˊ、ㄅㄚˇ、ㄅㄚˋ ㄉㄜ˙ ㄕㄥ ㄉㄧㄠˋ ㄉㄡ ㄅㄨˋ ㄧˊ ㄧㄤˋ。",
      [
        curriculumQuestion(curriculumCategories.tones, "哪個音是第二聲？", "ㄋㄚˇ ㄍㄜ˙ ㄧㄣ ㄕˋ ㄉㄧˋ ㄦˋ ㄕㄥ？", ["ㄇㄚ", "ㄇㄚˊ", "ㄇㄚˋ"], ["", "", ""], "ㄇㄚˊ", "ㄇㄚˊ是第二聲。", "ㄇㄚˊ ㄕˋ ㄉㄧˋ ㄦˋ ㄕㄥ。"),
        curriculumQuestion(curriculumCategories.tones, "哪個音是第三聲？", "ㄋㄚˇ ㄍㄜ˙ ㄧㄣ ㄕˋ ㄉㄧˋ ㄙㄢ ㄕㄥ？", ["ㄅㄚ", "ㄅㄚˇ", "ㄅㄚˋ"], ["", "", ""], "ㄅㄚˇ", "ㄅㄚˇ是第三聲。", "ㄅㄚˇ ㄕˋ ㄉㄧˋ ㄙㄢ ㄕㄥ。"),
        curriculumQuestion(curriculumCategories.phonics, "ㄊ和ㄨ合起來是哪個音？", "ㄊ ㄏㄜˊ ㄨ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄊㄨ", "ㄉㄨ", "ㄋㄨ"], ["", "", ""], "ㄊㄨ", "聲符ㄊ和韻符ㄨ合成ㄊㄨ。", "ㄕㄥ ㄈㄨˊ ㄊ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄨ ㄏㄜˊ ㄔㄥˊ ㄊㄨ。")
      ]),
    curriculumLesson("首冊 6 山坡上的學校", "ㄕㄡˇ ㄘㄜˋ ㄌㄧㄡˋ ㄕㄢ ㄆㄛ ㄕㄤˋ ㄉㄜ˙ ㄒㄩㄝˊ ㄒㄧㄠˋ",
      "觀察校園裡的事物，用注音拼讀常見的校園詞語。",
      "ㄍㄨㄢ ㄔㄚˊ ㄒㄧㄠˋ ㄩㄢˊ ㄌㄧˇ ㄉㄜ˙ ㄕˋ ㄨˋ，ㄩㄥˋ ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ ㄔㄤˊ ㄐㄧㄢˋ ㄉㄜ˙ ㄒㄧㄠˋ ㄩㄢˊ ㄘˊ ㄩˇ。",
      "例子：操場、教室和花園都是校園裡可以觀察的地方。",
      "ㄌㄧˋ ㄗ˙：ㄘㄠ ㄔㄤˇ、ㄐㄧㄠˋ ㄕˋ ㄏㄜˊ ㄏㄨㄚ ㄩㄢˊ ㄉㄡ ㄕˋ ㄒㄧㄠˋ ㄩㄢˊ ㄌㄧˇ ㄎㄜˇ ㄧˇ ㄍㄨㄢ ㄔㄚˊ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ。",
      [
        curriculumQuestion(curriculumCategories.vocabulary, "想看小朋友跑步，可以到哪裡？", "ㄒㄧㄤˇ ㄎㄢˋ ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ ㄆㄠˇ ㄅㄨˋ，ㄎㄜˇ ㄧˇ ㄉㄠˋ ㄋㄚˇ ㄌㄧˇ？", ["操場", "廚房", "浴室"], ["ㄘㄠ ㄔㄤˇ", "ㄔㄨˊ ㄈㄤˊ", "ㄩˋ ㄕˋ"], "操場", "操場是大家活動和跑步的地方。", "ㄘㄠ ㄔㄤˇ ㄕˋ ㄉㄚˋ ㄐㄧㄚ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄏㄜˊ ㄆㄠˇ ㄅㄨˋ ㄉㄜ˙ ㄉㄧˋ ㄈㄤ。"),
        curriculumQuestion(curriculumCategories.phonics, "「ㄒㄧㄠˋ」的韻符是哪個？", "ㄒㄧㄠˋ ㄉㄜ˙ ㄩㄣˋ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙？", ["ㄒ", "ㄧㄠ", "ㄠ"], ["", "", ""], "ㄧㄠ", "ㄒ是聲符，ㄧㄠ是韻符。", "ㄒ ㄕˋ ㄕㄥ ㄈㄨˊ，ㄧㄠ ㄕˋ ㄩㄣˋ ㄈㄨˊ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "在學校教室裡，哪一樣最常用來寫字？", "ㄗㄞˋ ㄒㄩㄝˊ ㄒㄧㄠˋ ㄐㄧㄠˋ ㄕˋ ㄌㄧˇ，ㄋㄚˇ ㄧˊ ㄧㄤˋ ㄗㄨㄟˋ ㄔㄤˊ ㄩㄥˋ ㄌㄞˊ ㄒㄧㄝˇ ㄗˋ？", ["鉛筆", "湯匙", "枕頭"], ["ㄑㄧㄢ ㄅㄧˇ", "ㄊㄤ ㄔˊ", "ㄓㄣˇ ㄊㄡˊ"], "鉛筆", "鉛筆可以用來寫字。", "ㄑㄧㄢ ㄅㄧˇ ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄌㄞˊ ㄒㄧㄝˇ ㄗˋ。")
      ]),
    curriculumLesson("首冊 7 值日生", "ㄕㄡˇ ㄘㄜˋ ㄑㄧ ㄓˊ ㄖˋ ㄕㄥ",
      "練習聲符接上結合韻，例如ㄍ和ㄨㄚ合成ㄍㄨㄚ。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄕㄥ ㄈㄨˊ ㄐㄧㄝ ㄕㄤˋ ㄐㄧㄝˊ ㄏㄜˊ ㄩㄣˋ，ㄌㄧˋ ㄖㄨˊ ㄍ ㄏㄜˊ ㄨㄚ ㄏㄜˊ ㄔㄥˊ ㄍㄨㄚ。",
      "例子：ㄍ＋ㄨㄚ＝ㄍㄨㄚ；ㄍ＋ㄨㄛ＝ㄍㄨㄛ。",
      "ㄌㄧˋ ㄗ˙。",
      [
        curriculumQuestion(curriculumCategories.phonics, "ㄍ和ㄨㄛ合起來是哪個音？", "ㄍ ㄏㄜˊ ㄨㄛ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄍㄨㄛ", "ㄍㄨㄚ", "ㄎㄨㄛ"], ["", "", ""], "ㄍㄨㄛ", "聲符ㄍ接上結合韻ㄨㄛ，拼成ㄍㄨㄛ。", "ㄕㄥ ㄈㄨˊ ㄍ ㄐㄧㄝ ㄕㄤˋ ㄐㄧㄝˊ ㄏㄜˊ ㄩㄣˋ ㄨㄛ，ㄆㄧㄣ ㄔㄥˊ ㄍㄨㄛ。"),
        curriculumQuestion(curriculumCategories.phonics, "ㄏ和ㄨㄚ合起來是哪個音？", "ㄏ ㄏㄜˊ ㄨㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄏㄨㄚ", "ㄏㄨㄛ", "ㄍㄨㄚ"], ["", "", ""], "ㄏㄨㄚ", "聲符ㄏ接上結合韻ㄨㄚ，拼成ㄏㄨㄚ。", "ㄕㄥ ㄈㄨˊ ㄏ ㄐㄧㄝ ㄕㄤˋ ㄐㄧㄝˊ ㄏㄜˊ ㄩㄣˋ ㄨㄚ，ㄆㄧㄣ ㄔㄥˊ ㄏㄨㄚ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "值日生整理教室時，哪一件事最合適？", "ㄓˊ ㄖˋ ㄕㄥ ㄓㄥˇ ㄌㄧˇ ㄐㄧㄠˋ ㄕˋ ㄕˊ，ㄋㄚˇ ㄧˊ ㄐㄧㄢˋ ㄕˋ ㄗㄨㄟˋ ㄏㄜˊ ㄕˋ？", ["擦桌子", "追著同學跑", "把書本丟地上"], ["ㄘㄚ ㄓㄨㄛ ㄗ˙", "ㄓㄨㄟ ㄓㄜ˙ ㄊㄨㄥˊ ㄒㄩㄝˊ ㄆㄠˇ", "ㄅㄚˇ ㄕㄨ ㄅㄣˇ ㄉㄧㄡ ㄉㄧˋ ㄕㄤˋ"], "擦桌子", "值日生可以一起保持教室整潔。", "ㄓˊ ㄖˋ ㄕㄥ ㄎㄜˇ ㄧˇ ㄧˋ ㄑㄧˇ ㄅㄠˇ ㄔˊ ㄐㄧㄠˋ ㄕˋ ㄓㄥˇ ㄐㄧㄝˊ。")
      ]),
    curriculumLesson("首冊 8 運動會", "ㄕㄡˇ ㄘㄜˋ ㄅㄚ ㄩㄣˋ ㄉㄨㄥˋ ㄏㄨㄟˋ",
      "繼續用結合韻拼讀音節，並把注音放進簡單的運動情境中。",
      "ㄐㄧˋ ㄒㄩˋ ㄩㄥˋ ㄐㄧㄝˊ ㄏㄜˊ ㄩㄣˋ ㄆㄧㄣ ㄉㄨˊ ㄧㄣ ㄐㄧㄝˊ，ㄅㄧㄥˋ ㄅㄚˇ ㄓㄨˋ ㄧㄣˋ ㄈㄤˋ ㄐㄧㄣˋ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄩㄣˋ ㄉㄨㄥˋ ㄑㄧㄥˊ ㄐㄧㄥˋ ㄓㄨㄥ。",
      "例子：ㄎ＋ㄨㄚ＝ㄎㄨㄚ；換一個聲符，就能拼出不同音節。",
      "ㄌㄧˋ ㄗ˙：ㄏㄨㄢˋ ㄧˊ ㄍㄜ˙ ㄕㄥ ㄈㄨˊ，ㄐㄧㄡˋ ㄋㄥˊ ㄆㄧㄣ ㄔㄨ ㄅㄨˋ ㄊㄨㄥˊ ㄧㄣ ㄐㄧㄝˊ。",
      [
        curriculumQuestion(curriculumCategories.phonics, "ㄎ和ㄨㄚ合起來是哪個音？", "ㄎ ㄏㄜˊ ㄨㄚ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄧㄣ？", ["ㄎㄨㄚ", "ㄍㄨㄚ", "ㄎㄨㄛ"], ["", "", ""], "ㄎㄨㄚ", "聲符ㄎ接上韻符ㄨㄚ，拼成ㄎㄨㄚ。", "ㄕㄥ ㄈㄨˊ ㄎ ㄐㄧㄝ ㄕㄤˋ ㄩㄣˋ ㄈㄨˊ ㄨㄚ，ㄆㄧㄣ ㄔㄥˊ ㄎㄨㄚ。"),
        curriculumQuestion(curriculumCategories.phonics, "哪一組聲符和韻符能拼成ㄏㄨㄚ？", "ㄋㄚˇ ㄧˋ ㄗㄨˇ ㄕㄥ ㄈㄨˊ ㄏㄜˊ ㄩㄣˋ ㄈㄨˊ ㄋㄥˊ ㄆㄧㄣ ㄔㄥˊ ㄏㄨㄚ？", ["ㄏ＋ㄨㄚ", "ㄍ＋ㄨㄛ", "ㄎ＋ㄧ"], ["", "", ""], "ㄏ＋ㄨㄚ", "ㄏ接上ㄨㄚ就能拼成ㄏㄨㄚ。", "ㄏ ㄐㄧㄝ ㄕㄤˋ ㄨㄚ ㄐㄧㄡˋ ㄋㄥˊ ㄆㄧㄣ ㄔㄥˊ ㄏㄨㄚ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "運動會接力賽時，同學要怎麼做？", "ㄩㄣˋ ㄉㄨㄥˋ ㄏㄨㄟˋ ㄐㄧㄝ ㄌㄧˋ ㄙㄞˋ ㄕˊ，ㄊㄨㄥˊ ㄒㄩㄝˊ ㄧㄠˋ ㄗㄣˇ ㄇㄜ˙ ㄗㄨㄛˋ？", ["輪流接棒", "把接力棒藏起來", "推擠同學"], ["ㄌㄨㄣˊ ㄌㄧㄡˊ ㄐㄧㄝ ㄅㄤˋ", "ㄅㄚˇ ㄐㄧㄝ ㄌㄧˋ ㄅㄤˋ ㄘㄤˊ ㄑㄧˇ ㄌㄞˊ", "ㄊㄨㄟ ㄐㄧˇ ㄊㄨㄥˊ ㄒㄩㄝˊ"], "輪流接棒", "接力賽要輪流交接接力棒。", "ㄐㄧㄝ ㄌㄧˋ ㄙㄞˋ ㄧㄠˋ ㄌㄨㄣˊ ㄌㄧㄡˊ ㄐㄧㄠ ㄐㄧㄝ ㄐㄧㄝ ㄌㄧˋ ㄅㄤˋ。")
      ]),
    curriculumLesson("首冊 9 做卡片", "ㄕㄡˇ ㄘㄜˋ ㄐㄧㄡˇ ㄗㄨㄛˋ ㄎㄚˇ ㄆㄧㄢˋ",
      "把注音拼讀和短句閱讀放在一起，練習用注音幫助理解文字。",
      "ㄅㄚˇ ㄓㄨˋ ㄧㄣˋ ㄆㄧㄣ ㄉㄨˊ ㄏㄜˊ ㄉㄨㄢˇ ㄐㄩˋ ㄩㄝˋ ㄉㄨˊ ㄈㄤˋ ㄗㄞˋ ㄧˋ ㄑㄧˇ，ㄌㄧㄢˋ ㄒㄧˊ ㄩㄥˋ ㄓㄨˋ ㄧㄣˋ ㄅㄤ ㄓㄨˋ ㄌㄧˇ ㄐㄧㄝˇ ㄨㄣˊ ㄗˋ。",
      "例子：先看注音讀出句子，再找出句子說了什麼。",
      "ㄌㄧˋ ㄗ˙：ㄒㄧㄢ ㄎㄢˋ ㄓㄨˋ ㄧㄣˋ ㄉㄨˊ ㄔㄨ ㄐㄩˋ ㄗ˙，ㄗㄞˋ ㄓㄠˇ ㄔㄨ ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙。",
      [
        curriculumQuestion(curriculumCategories.reading, "小安做了一張卡片送給奶奶。卡片送給誰？", "ㄒㄧㄠˇ ㄢ ㄗㄨㄛˋ ㄌㄜ˙ ㄧˋ ㄓㄤ ㄎㄚˇ ㄆㄧㄢˋ ㄙㄨㄥˋ ㄍㄟˇ ㄋㄞˇ ㄋㄞ˙。ㄎㄚˇ ㄆㄧㄢˋ ㄙㄨㄥˋ ㄍㄟˇ ㄕㄟˊ？", ["奶奶", "老師", "同學"], ["ㄋㄞˇ ㄋㄞ˙", "ㄌㄠˇ ㄕ", "ㄊㄨㄥˊ ㄒㄩㄝˊ"], "奶奶", "句子說卡片是送給奶奶的。", "ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄎㄚˇ ㄆㄧㄢˋ ㄕˋ ㄙㄨㄥˋ ㄍㄟˇ ㄋㄞˇ ㄋㄞ˙ ㄉㄜ˙。"),
        curriculumQuestion(curriculumCategories.phonics, "「ㄎㄚˇ」的聲符是哪一個？", "ㄎㄚˇ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", ["ㄎ", "ㄚ", "ㄇ"], ["", "", ""], "ㄎ", "ㄎ是聲符，ㄚ是韻符。", "ㄎ ㄕˋ ㄕㄥ ㄈㄨˊ，ㄚ ㄕˋ ㄩㄣˋ ㄈㄨˊ。"),
        curriculumQuestion(curriculumCategories.reading, "讀短句時，注音可以幫我們做什麼？", "ㄉㄨˊ ㄉㄨㄢˇ ㄐㄩˋ ㄕˊ，ㄓㄨˋ ㄧㄣˋ ㄎㄜˇ ㄧˇ ㄅㄤ ㄨㄛˇ ㄇㄣ˙ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙？", ["認讀國字", "把字變大", "替句子上顏色"], ["ㄖㄣˋ ㄉㄨˊ ㄍㄨㄛˊ ㄗˋ", "ㄅㄚˇ ㄗˋ ㄅㄧㄢˋ ㄉㄚˋ", "ㄊㄧˋ ㄐㄩˋ ㄗ˙ ㄕㄤˋ ㄧㄢˊ ㄙㄜˋ"], "認讀國字", "注音能提示讀音，幫助我們認讀國字。", "ㄓㄨˋ ㄧㄣˋ ㄋㄥˊ ㄊㄧˊ ㄕˋ ㄉㄨˊ ㄧㄣ，ㄅㄤ ㄓㄨˋ ㄨㄛˇ ㄇㄣ˙ ㄖㄣˋ ㄉㄨˊ ㄍㄨㄛˊ ㄗˋ。")
      ]),
    curriculumLesson("首冊來閱讀：紙飛機", "ㄕㄡˇ ㄘㄜˋ ㄌㄞˊ ㄩㄝˋ ㄉㄨˊ ㄓˇ ㄈㄟ ㄐㄧ",
      "看圖想一想，再用簡短句子說出人物、物品和事情的先後。",
      "ㄎㄢˋ ㄊㄨˊ ㄒㄧㄤˇ ㄧˋ ㄒㄧㄤˇ，ㄗㄞˋ ㄩㄥˋ ㄐㄧㄢˇ ㄉㄨㄢˇ ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄔㄨ ㄖㄣˊ ㄨˋ、ㄨˋ ㄆㄧㄣˇ ㄏㄜˊ ㄕˋ ㄑㄧㄥˊ ㄉㄜ˙ ㄒㄧㄢ ㄏㄡˋ。",
      "原創閱讀：小禾摺好紙飛機，寫上自己的名字，再和朋友到空地試飛。",
      "ㄩㄢˊ ㄔㄨㄤˋ ㄩㄝˋ ㄉㄨˊ：ㄒㄧㄠˇ ㄏㄜˊ ㄓㄜˊ ㄏㄠˇ ㄓˇ ㄈㄟ ㄐㄧ，ㄒㄧㄝˇ ㄕㄤˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ，ㄗㄞˋ ㄏㄜˊ ㄆㄥˊ ㄧㄡˇ ㄉㄠˋ ㄎㄨㄥˋ ㄉㄧˋ ㄕˋ ㄈㄟ。",
      [
        curriculumQuestion(curriculumCategories.reading, "小禾摺好了什麼？", "ㄒㄧㄠˇ ㄏㄜˊ ㄓㄜˊ ㄏㄠˇ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙？", ["紙飛機", "紙船", "風箏"], ["ㄓˇ ㄈㄟ ㄐㄧ", "ㄓˇ ㄔㄨㄢˊ", "ㄈㄥ ㄓㄥ"], "紙飛機", "小禾摺好的是紙飛機。", "ㄒㄧㄠˇ ㄏㄜˊ ㄓㄜˊ ㄏㄠˇ ㄉㄜ˙ ㄕˋ ㄓˇ ㄈㄟ ㄐㄧ。"),
        curriculumQuestion(curriculumCategories.reading, "小禾先在紙飛機上做什麼？", "ㄒㄧㄠˇ ㄏㄜˊ ㄒㄧㄢ ㄗㄞˋ ㄓˇ ㄈㄟ ㄐㄧ ㄕㄤˋ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙？", ["寫上名字", "畫上地圖", "貼上樹葉"], ["ㄒㄧㄝˇ ㄕㄤˋ ㄇㄧㄥˊ ㄗˋ", "ㄏㄨㄚˋ ㄕㄤˋ ㄉㄧˋ ㄊㄨˊ", "ㄊㄧㄝ ㄕㄤˋ ㄕㄨˋ ㄧㄝˋ"], "寫上名字", "摺好後，小禾先寫上自己的名字。", "ㄓㄜˊ ㄏㄠˇ ㄏㄡˋ，ㄒㄧㄠˇ ㄏㄜˊ ㄒㄧㄢ ㄒㄧㄝˇ ㄕㄤˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄇㄧㄥˊ ㄗˋ。"),
        curriculumQuestion(curriculumCategories.reading, "小禾和朋友到哪裡試飛？", "ㄒㄧㄠˇ ㄏㄜˊ ㄏㄜˊ ㄆㄥˊ ㄧㄡˇ ㄉㄠˋ ㄋㄚˇ ㄌㄧˇ ㄕˋ ㄈㄟ？", ["空地", "教室", "水池"], ["ㄎㄨㄥˋ ㄉㄧˋ", "ㄐㄧㄠˋ ㄕˋ", "ㄕㄨㄟˇ ㄔˊ"], "空地", "他們到空地一起試飛紙飛機。", "ㄊㄚ ㄇㄣ˙ ㄉㄠˋ ㄎㄨㄥˋ ㄉㄧˋ ㄧˋ ㄑㄧˇ ㄕˋ ㄈㄟ ㄓˇ ㄈㄟ ㄐㄧ。")
      ]),
    curriculumLesson("第一冊 1 一起走", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄧ ㄧˋ ㄑㄧˇ ㄗㄡˇ",
      "讀短詩時找出一起行動的人，練習用熟悉部件認讀詞語。",
      "ㄉㄨˊ ㄉㄨㄢˇ ㄕ ㄕˊ ㄓㄠˇ ㄔㄨ ㄧˋ ㄑㄧˇ ㄒㄧㄥˊ ㄉㄨㄥˋ ㄉㄜ˙ ㄖㄣˊ，ㄌㄧㄢˋ ㄒㄧˊ ㄩㄥˋ ㄕㄨˊ ㄒㄧˊ ㄅㄨˋ ㄐㄧㄢˋ ㄖㄣˋ ㄉㄨˊ ㄘˊ ㄩˇ。",
      "例子：手和朋友一起牽，大家可以一起走。",
      "ㄌㄧˋ ㄗ˙：ㄕㄡˇ ㄏㄜˊ ㄆㄥˊ ㄧㄡˇ ㄧˋ ㄑㄧˇ ㄑㄧㄢ，ㄉㄚˋ ㄐㄧㄚ ㄎㄜˇ ㄧˇ ㄧˋ ㄑㄧˇ ㄗㄡˇ。",
      [
        curriculumQuestion(curriculumCategories.reading, "一起走路時，怎麼做比較安全？", "ㄧˋ ㄑㄧˇ ㄗㄡˇ ㄌㄨˋ ㄕˊ，ㄗㄣˇ ㄇㄜ˙ ㄗㄨㄛˋ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ？", ["跟著隊伍慢慢走", "推前面的人", "自己跑遠"], ["ㄍㄣ ㄓㄜ˙ ㄉㄨㄟˋ ㄨˇ ㄇㄢˋ ㄇㄢˋ ㄗㄡˇ", "ㄊㄨㄟ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄜ˙ ㄖㄣˊ", "ㄗˋ ㄐㄧˇ ㄆㄠˇ ㄩㄢˇ"], "跟著隊伍慢慢走", "跟著隊伍慢慢走，大家都比較安全。", "ㄍㄣ ㄓㄜ˙ ㄉㄨㄟˋ ㄨˇ ㄇㄢˋ ㄇㄢˋ ㄗㄡˇ，ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "「手拉手」最像在做什麼？", "ㄕㄡˇ ㄌㄚ ㄕㄡˇ ㄗㄨㄟˋ ㄒㄧㄤˋ ㄗㄞˋ ㄗㄨㄛˋ ㄕㄣˊ ㄇㄜ˙？", ["牽著手一起走", "一個人睡覺", "把手藏起來"], ["ㄑㄧㄢ ㄓㄜ˙ ㄕㄡˇ ㄧˋ ㄑㄧˇ ㄗㄡˇ", "ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄕㄨㄟˋ ㄐㄧㄠˋ", "ㄅㄚˇ ㄕㄡˇ ㄘㄤˊ ㄑㄧˇ ㄌㄞˊ"], "牽著手一起走", "手拉手表示牽著手一起行動。", "ㄕㄡˇ ㄌㄚ ㄕㄡˇ ㄅㄧㄠˇ ㄕˋ ㄑㄧㄢ ㄓㄜ˙ ㄕㄡˇ ㄧˋ ㄑㄧˇ ㄒㄧㄥˊ ㄉㄨㄥˋ。"),
        curriculumQuestion(curriculumCategories.phonics, "「走」的注音開頭是什麼？", "ㄗㄡˇ ㄉㄜ˙ ㄓㄨˋ ㄧㄣˋ ㄎㄞ ㄊㄡˊ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", ["ㄗ", "ㄕ", "ㄍ"], ["", "", ""], "ㄗ", "「走」的聲符是ㄗ。", "ㄗㄡˇ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄗ。")
      ]),
    curriculumLesson("第一冊 2 大風吹", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄦˋ ㄉㄚˋ ㄈㄥ ㄔㄨㄟ",
      "讀詩歌中的動作和景象，練習依句意選出合適的詞語。",
      "ㄉㄨˊ ㄕ ㄍㄜ ㄓㄨㄥ ㄉㄜ˙ ㄉㄨㄥˋ ㄗㄨㄛˋ ㄏㄜˊ ㄐㄧㄥˇ ㄒㄧㄤˋ，ㄌㄧㄢˋ ㄒㄧˊ ㄧ ㄐㄩˋ ㄧˋ ㄒㄩㄢˇ ㄔㄨ ㄏㄜˊ ㄕˋ ㄉㄜ˙ ㄘˊ ㄩˇ。",
      "例子：風來了，樹葉會跟著風搖動。",
      "ㄌㄧˋ ㄗ˙：ㄈㄥ ㄌㄞˊ ㄌㄜ˙，ㄕㄨˋ ㄧㄝˋ ㄏㄨㄟˋ ㄍㄣ ㄓㄜ˙ ㄈㄥ ㄧㄠˊ ㄉㄨㄥˋ。",
      [
        curriculumQuestion(curriculumCategories.vocabulary, "風吹來時，樹葉會怎麼樣？", "ㄈㄥ ㄔㄨㄟ ㄌㄞˊ ㄕˊ，ㄕㄨˋ ㄧㄝˋ ㄏㄨㄟˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ？", ["搖動", "煮飯", "睡在床上"], ["ㄧㄠˊ ㄉㄨㄥˋ", "ㄓㄨˇ ㄈㄢˋ", "ㄕㄨㄟˋ ㄗㄞˋ ㄔㄨㄤˊ ㄕㄤˋ"], "搖動", "風吹過樹葉，樹葉會搖動。", "ㄈㄥ ㄔㄨㄟ ㄍㄨㄛˋ ㄕㄨˋ ㄧㄝˋ，ㄕㄨˋ ㄧㄝˋ ㄏㄨㄟˋ ㄧㄠˊ ㄉㄨㄥˋ。"),
        curriculumQuestion(curriculumCategories.reading, "「風把帽子吹走了。」帽子怎麼了？", "ㄈㄥ ㄅㄚˇ ㄇㄠˋ ㄗ˙ ㄔㄨㄟ ㄗㄡˇ ㄌㄜ˙。ㄇㄠˋ ㄗ˙ ㄗㄣˇ ㄇㄜ˙ ㄌㄜ˙？", ["被風吹走", "變成雨傘", "放進抽屜"], ["ㄅㄟˋ ㄈㄥ ㄔㄨㄟ ㄗㄡˇ", "ㄅㄧㄢˋ ㄔㄥˊ ㄩˇ ㄙㄢˇ", "ㄈㄤˋ ㄐㄧㄣˋ ㄔㄡ ㄊㄧˋ"], "被風吹走", "句子說帽子被風吹走了。", "ㄐㄩˋ ㄗ˙ ㄕㄨㄛ ㄇㄠˋ ㄗ˙ ㄅㄟˋ ㄈㄥ ㄔㄨㄟ ㄗㄡˇ ㄌㄜ˙。"),
        curriculumQuestion(curriculumCategories.phonics, "「風」的注音最後一個符號是什麼？", "ㄈㄥ ㄉㄜ˙ ㄓㄨˋ ㄧㄣˋ ㄗㄨㄟˋ ㄏㄡˋ ㄧˊ ㄍㄜ˙ ㄈㄨˊ ㄏㄠˋ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", ["ㄥ", "ㄈ", "ㄨ"], ["", "", ""], "ㄥ", "ㄈ是聲符，ㄥ是韻符。", "ㄈ ㄕˋ ㄕㄥ ㄈㄨˊ，ㄥ ㄕˋ ㄩㄣˋ ㄈㄨˊ。")
      ]),
    curriculumLesson("第一冊 3 火車過山洞", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄙㄢ ㄏㄨㄛˇ ㄔㄜ ㄍㄨㄛˋ ㄕㄢ ㄉㄨㄥˋ",
      "按事情先後排列句子，觀察國字部件，並練習仿寫短句。",
      "ㄢˋ ㄕˋ ㄑㄧㄥˊ ㄒㄧㄢ ㄏㄡˋ ㄆㄞˊ ㄌㄧㄝˋ ㄐㄩˋ ㄗ˙，ㄍㄨㄢ ㄔㄚˊ ㄍㄨㄛˊ ㄗˋ ㄅㄨˋ ㄐㄧㄢˋ，ㄅㄧㄥˋ ㄌㄧㄢˋ ㄒㄧˊ ㄈㄤˇ ㄒㄧㄝˇ ㄉㄨㄢˇ ㄐㄩˋ。",
      "例子：火車先開到山洞，再從山洞另一邊出來。",
      "ㄌㄧˋ ㄗ˙：ㄏㄨㄛˇ ㄔㄜ ㄒㄧㄢ ㄎㄞ ㄉㄠˋ ㄕㄢ ㄉㄨㄥˋ，ㄗㄞˋ ㄘㄨㄥˊ ㄕㄢ ㄉㄨㄥˋ ㄌㄧㄥˋ ㄧˋ ㄅㄧㄢ ㄔㄨ ㄌㄞˊ。",
      [
        curriculumQuestion(curriculumCategories.reading, "火車開到山洞後，接著會怎麼樣？", "ㄏㄨㄛˇ ㄔㄜ ㄎㄞ ㄉㄠˋ ㄕㄢ ㄉㄨㄥˋ ㄏㄡˋ，ㄐㄧㄝ ㄓㄜ˙ ㄏㄨㄟˋ ㄗㄣˇ ㄇㄜ˙ ㄧㄤˋ？", ["從另一邊出來", "飛到天空", "停在海裡"], ["ㄘㄨㄥˊ ㄌㄧㄥˋ ㄧˋ ㄅㄧㄢ ㄔㄨ ㄌㄞˊ", "ㄈㄟ ㄉㄠˋ ㄊㄧㄢ ㄎㄨㄥ", "ㄊㄧㄥˊ ㄗㄞˋ ㄏㄞˇ ㄌㄧˇ"], "從另一邊出來", "火車穿過山洞，會從另一邊出來。", "ㄏㄨㄛˇ ㄔㄜ ㄔㄨㄢ ㄍㄨㄛˋ ㄕㄢ ㄉㄨㄥˋ，ㄏㄨㄟˋ ㄘㄨㄥˊ ㄌㄧㄥˋ ㄧˋ ㄅㄧㄢ ㄔㄨ ㄌㄞˊ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "哪一個詞語和火車有關？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄘˊ ㄩˇ ㄏㄜˊ ㄏㄨㄛˇ ㄔㄜ ㄧㄡˇ ㄍㄨㄢ？", ["車站", "魚缸", "枕頭"], ["ㄔㄜ ㄓㄢˋ", "ㄩˊ ㄍㄤ", "ㄓㄣˇ ㄊㄡˊ"], "車站", "火車會在車站停靠。", "ㄏㄨㄛˇ ㄔㄜ ㄏㄨㄟˋ ㄗㄞˋ ㄔㄜ ㄓㄢˋ ㄊㄧㄥˊ ㄎㄠˋ。"),
        curriculumQuestion(curriculumCategories.phonics, "「山」的聲符是哪一個？", "ㄕㄢ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", ["ㄕ", "ㄢ", "ㄇ"], ["", "", ""], "ㄕ", "「山」的聲符是ㄕ，韻符是ㄢ。", "ㄕㄢ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄕ，ㄩㄣˋ ㄈㄨˊ ㄕˋ ㄢ。")
      ]),
    curriculumLesson("統整活動一：逗號和句號", "ㄊㄨㄥˇ ㄓㄥˇ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄧ ㄉㄡˋ ㄏㄠˋ ㄏㄜˊ ㄐㄩˋ ㄏㄠˋ",
      "句子中間需要短暫停頓時用逗號，說完一件事時用句號。",
      "ㄐㄩˋ ㄗ˙ ㄓㄨㄥ ㄐㄧㄢ ㄒㄩ ㄧㄠˋ ㄉㄨㄢˇ ㄓㄢˋ ㄊㄧㄥˊ ㄉㄨㄣˋ ㄕˊ ㄩㄥˋ ㄉㄡˋ ㄏㄠˋ，ㄕㄨㄛ ㄨㄢˊ ㄧˊ ㄐㄧㄢˋ ㄕˋ ㄕˊ ㄩㄥˋ ㄐㄩˋ ㄏㄠˋ。",
      "例子：我帶了水壺，還帶了雨傘。這是我的書包。",
      "ㄌㄧˋ ㄗ˙：ㄨㄛˇ ㄉㄞˋ ㄌㄜ˙ ㄕㄨㄟˇ ㄏㄨˊ，ㄏㄞˊ ㄉㄞˋ ㄌㄜ˙ ㄩˇ ㄙㄢˇ。ㄓㄜˋ ㄕˋ ㄨㄛˇ ㄉㄜ˙ ㄕㄨ ㄅㄠ。",
      [
        curriculumQuestion(curriculumCategories.punctuation, "「我有鉛筆＿＿橡皮擦。」中間停一下用什麼？", "ㄨㄛˇ ㄧㄡˇ ㄑㄧㄢ ㄅㄧˇ，ㄒㄧㄤˋ ㄆㄧˊ ㄘㄚ。ㄓㄨㄥ ㄐㄧㄢ ㄊㄧㄥˊ ㄧˊ ㄒㄧㄚˋ ㄩㄥˋ ㄕㄣˊ ㄇㄜ˙？", ["逗號", "句號", "問號"], ["ㄉㄡˋ ㄏㄠˋ", "ㄐㄩˋ ㄏㄠˋ", "ㄨㄣˋ ㄏㄠˋ"], "逗號", "逗號可以表示句子中間短暫停頓。", "ㄉㄡˋ ㄏㄠˋ ㄎㄜˇ ㄧˇ ㄅㄧㄠˇ ㄕˋ ㄐㄩˋ ㄗ˙ ㄓㄨㄥ ㄐㄧㄢ ㄉㄨㄢˇ ㄓㄢˋ ㄊㄧㄥˊ ㄉㄨㄣˋ。"),
        curriculumQuestion(curriculumCategories.punctuation, "「今天是星期一＿＿」說完一句話要放什麼？", "ㄐㄧㄣ ㄊㄧㄢ ㄕˋ ㄒㄧㄥ ㄑㄧˊ ㄧ，ㄕㄨㄛ ㄨㄢˊ ㄧˊ ㄐㄩˋ ㄏㄨㄚˋ ㄧㄠˋ ㄈㄤˋ ㄕㄣˊ ㄇㄜ˙？", ["句號", "逗號", "問號"], ["ㄐㄩˋ ㄏㄠˋ", "ㄉㄡˋ ㄏㄠˋ", "ㄨㄣˋ ㄏㄠˋ"], "句號", "說完一件事，句尾用句號。", "ㄕㄨㄛ ㄨㄢˊ ㄧˊ ㄐㄧㄢˋ ㄕˋ，ㄐㄩˋ ㄨㄟˇ ㄩㄥˋ ㄐㄩˋ ㄏㄠˋ。"),
        curriculumQuestion(curriculumCategories.punctuation, "哪一個符號是逗號？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄈㄨˊ ㄏㄠˋ ㄕˋ ㄉㄡˋ ㄏㄠˋ？", ["，", "。", "？"], ["", "", ""], "，", "逗號表示短暫停頓。", "ㄉㄡˋ ㄏㄠˋ ㄅㄧㄠˇ ㄕˋ ㄉㄨㄢˇ ㄓㄢˋ ㄊㄧㄥˊ ㄉㄨㄣˋ。")
      ]),
    curriculumLesson("第一冊 4 請問", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄙˋ ㄑㄧㄥˇ ㄨㄣˋ",
      "練習有禮貌地發問，聽清楚問題，再找出合適的回答。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ ㄉㄧˋ ㄈㄚ ㄨㄣˋ，ㄊㄧㄥ ㄑㄧㄥ ㄔㄨˇ ㄨㄣˋ ㄊㄧˊ，ㄗㄞˋ ㄓㄠˇ ㄔㄨ ㄏㄜˊ ㄕˋ ㄉㄜ˙ ㄏㄨㄟˊ ㄉㄚˊ。",
      "例子：請問圖書館在哪裡？在操場旁邊。",
      "ㄌㄧˋ ㄗ˙：ㄑㄧㄥˇ ㄨㄣˋ ㄊㄨˊ ㄕㄨ ㄍㄨㄢˇ ㄗㄞˋ ㄋㄚˇ ㄌㄧˇ？ㄗㄞˋ ㄘㄠ ㄔㄤˇ ㄆㄤˊ ㄅㄧㄢ。",
      [
        curriculumQuestion(curriculumCategories.vocabulary, "向老師借東西時，哪一句比較有禮貌？", "ㄒㄧㄤˋ ㄌㄠˇ ㄕ ㄐㄧㄝˋ ㄉㄨㄥ ㄒㄧ ㄕˊ，ㄋㄚˇ ㄧˊ ㄐㄩˋ ㄅㄧˇ ㄐㄧㄠˋ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ？", ["請問可以借我嗎？", "快點給我！", "我拿走了。"], ["ㄑㄧㄥˇ ㄨㄣˋ ㄎㄜˇ ㄧˇ ㄐㄧㄝˋ ㄨㄛˇ ㄇㄚ˙", "ㄎㄨㄞˋ ㄉㄧㄢˇ ㄍㄟˇ ㄨㄛˇ", "ㄨㄛˇ ㄋㄚˊ ㄗㄡˇ ㄌㄜ˙"], "請問可以借我嗎？", "加上「請問」並清楚詢問，是有禮貌的說法。", "ㄐㄧㄚ ㄕㄤˋ ㄑㄧㄥˇ ㄨㄣˋ ㄅㄧㄥˋ ㄑㄧㄥ ㄔㄨˇ ㄒㄩㄣˊ ㄨㄣˋ，ㄕˋ ㄧㄡˇ ㄌㄧˇ ㄇㄠˋ ㄉㄜ˙ ㄕㄨㄛ ㄈㄚˇ。"),
        curriculumQuestion(curriculumCategories.reading, "同學問「現在幾點？」他想知道什麼？", "ㄊㄨㄥˊ ㄒㄩㄝˊ ㄨㄣˋ ㄒㄧㄢˋ ㄗㄞˋ ㄐㄧˇ ㄉㄧㄢˇ？ㄊㄚ ㄒㄧㄤˇ ㄓ ㄉㄠˋ ㄕㄣˊ ㄇㄜ˙？", ["時間", "天氣顏色", "書本厚度"], ["ㄕˊ ㄐㄧㄢ", "ㄊㄧㄢ ㄑㄧˋ ㄧㄢˊ ㄙㄜˋ", "ㄕㄨ ㄅㄣˇ ㄏㄡˋ ㄉㄨˋ"], "時間", "「幾點」是在詢問時間。", "ㄐㄧˇ ㄉㄧㄢˇ ㄕˋ ㄗㄞˋ ㄒㄩㄣˊ ㄨㄣˋ ㄕˊ ㄐㄧㄢ。"),
        curriculumQuestion(curriculumCategories.phonics, "「問」的注音聲符是哪一個？", "ㄨㄣˋ ㄉㄜ˙ ㄓㄨˋ ㄧㄣˋ ㄕㄥ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", ["ㄨ", "ㄨㄣ", "ㄇ"], ["", "", ""], "ㄨ", "「問」的聲符是ㄨ，韻符是ㄣ。", "ㄨㄣˋ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄨ，ㄩㄣˋ ㄈㄨˊ ㄕˋ ㄣ。")
      ]),
    curriculumLesson("第一冊 5 七彩的滑梯", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄨˇ ㄑㄧ ㄘㄞˇ ㄉㄜ˙ ㄏㄨㄚˊ ㄊㄧ",
      "從色彩和動作詞語讀懂句子，練習照樣造出簡單句子。",
      "ㄘㄨㄥˊ ㄙㄜˋ ㄘㄞˇ ㄏㄜˊ ㄉㄨㄥˋ ㄗㄨㄛˋ ㄘˊ ㄩˇ ㄉㄨˊ ㄉㄨㄥˇ ㄐㄩˋ ㄗ˙，ㄌㄧㄢˋ ㄒㄧˊ ㄓㄠˋ ㄧㄤˋ ㄗㄠˋ ㄔㄨ ㄐㄧㄢˇ ㄉㄢ ㄐㄩˋ ㄗ˙。",
      "例子：小朋友排好隊，一個接一個溜下滑梯。",
      "ㄌㄧˋ ㄗ˙：ㄒㄧㄠˇ ㄆㄥˊ ㄧㄡˇ ㄆㄞˊ ㄏㄠˇ ㄉㄨㄟˋ，ㄧˊ ㄍㄜ˙ ㄐㄧㄝ ㄧˊ ㄍㄜ˙ ㄌㄧㄡ ㄒㄧㄚˋ ㄏㄨㄚˊ ㄊㄧ。",
      [
        curriculumQuestion(curriculumCategories.reading, "溜滑梯時，怎麼做比較安全？", "ㄌㄧㄡ ㄏㄨㄚˊ ㄊㄧ ㄕˊ，ㄗㄣˇ ㄇㄜ˙ ㄗㄨㄛˋ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ？", ["排隊輪流玩", "從下面往上爬", "推前面的人"], ["ㄆㄞˊ ㄉㄨㄟˋ ㄌㄨㄣˊ ㄌㄧㄡˊ ㄨㄢˊ", "ㄘㄨㄥˊ ㄒㄧㄚˋ ㄇㄧㄢˋ ㄨㄤˇ ㄕㄤˋ ㄆㄚˊ", "ㄊㄨㄟ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄜ˙ ㄖㄣˊ"], "排隊輪流玩", "排隊輪流玩，大家都比較安全。", "ㄆㄞˊ ㄉㄨㄟˋ ㄌㄨㄣˊ ㄌㄧㄡˊ ㄨㄢˊ，ㄉㄚˋ ㄐㄧㄚ ㄉㄡ ㄅㄧˇ ㄐㄧㄠˋ ㄢ ㄑㄩㄢˊ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "「七彩」表示有很多什麼？", "ㄑㄧ ㄘㄞˇ ㄅㄧㄠˇ ㄕˋ ㄧㄡˇ ㄏㄣˇ ㄉㄨㄛ ㄕㄣˊ ㄇㄜ˙？", ["顏色", "雨水", "石頭"], ["ㄧㄢˊ ㄙㄜˋ", "ㄩˇ ㄕㄨㄟˇ", "ㄕˊ ㄊㄡ˙"], "顏色", "七彩是多種顏色的意思。", "ㄑㄧ ㄘㄞˇ ㄕˋ ㄉㄨㄛ ㄓㄨㄥˇ ㄧㄢˊ ㄙㄜˋ ㄉㄜ˙ ㄧˋ ㄙ˙。"),
        curriculumQuestion(curriculumCategories.vocabulary, "哪一個動作可以在滑梯上做？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄉㄨㄥˋ ㄗㄨㄛˋ ㄎㄜˇ ㄧˇ ㄗㄞˋ ㄏㄨㄚˊ ㄊㄧ ㄕㄤˋ ㄗㄨㄛˋ？", ["溜下來", "煮湯", "寫信"], ["ㄌㄧㄡ ㄒㄧㄚˋ ㄌㄞˊ", "ㄓㄨˇ ㄊㄤ", "ㄒㄧㄝˇ ㄒㄧㄣˋ"], "溜下來", "滑梯是讓人坐著溜下來的遊具。", "ㄏㄨㄚˊ ㄊㄧ ㄕˋ ㄖㄤˋ ㄖㄣˊ ㄗㄨㄛˋ ㄓㄜ˙ ㄌㄧㄡ ㄒㄧㄚˋ ㄌㄞˊ ㄉㄜ˙ ㄧㄡˊ ㄐㄩˋ。")
      ]),
    curriculumLesson("第一冊 6 秋千", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄌㄧㄡˋ ㄑㄧㄡ ㄑㄧㄢ",
      "讀句子找出人物和動作，並仔細觀察字的筆畫與筆順。",
      "ㄉㄨˊ ㄐㄩˋ ㄗ˙ ㄓㄠˇ ㄔㄨ ㄖㄣˊ ㄨˋ ㄏㄜˊ ㄉㄨㄥˋ ㄗㄨㄛˋ，ㄅㄧㄥˋ ㄗˇ ㄒㄧˋ ㄍㄨㄢ ㄔㄚˊ ㄗˋ ㄉㄜ˙ ㄅㄧˇ ㄏㄨㄚˋ ㄩˇ ㄅㄧˇ ㄕㄨㄣˋ。",
      "例子：坐秋千時要輪流，並握好扶手。",
      "ㄌㄧˋ ㄗ˙：ㄗㄨㄛˋ ㄑㄧㄡ ㄑㄧㄢ ㄕˊ ㄧㄠˋ ㄌㄨㄣˊ ㄌㄧㄡˊ，ㄅㄧㄥˋ ㄨㄛˋ ㄏㄠˇ ㄈㄨˊ ㄕㄡˇ。",
      [
        curriculumQuestion(curriculumCategories.reading, "玩秋千前，哪一件事要先做？", "ㄨㄢˊ ㄑㄧㄡ ㄑㄧㄢ ㄑㄧㄢˊ，ㄋㄚˇ ㄧˊ ㄐㄧㄢˋ ㄕˋ ㄧㄠˋ ㄒㄧㄢ ㄗㄨㄛˋ？", ["等前面的人離開", "用力推別人", "站在秋千前面"], ["ㄉㄥˇ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄜ˙ ㄖㄣˊ ㄌㄧˊ ㄎㄞ", "ㄩㄥˋ ㄌㄧˋ ㄊㄨㄟ ㄅㄧㄝˊ ㄖㄣˊ", "ㄓㄢˋ ㄗㄞˋ ㄑㄧㄡ ㄑㄧㄢ ㄑㄧㄢˊ ㄇㄧㄢˋ"], "等前面的人離開", "確認前面沒有人，再安全地玩秋千。", "ㄑㄩㄝˋ ㄖㄣˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄇㄟˊ ㄧㄡˇ ㄖㄣˊ，ㄗㄞˋ ㄢ ㄑㄩㄢˊ ㄉㄧˋ ㄨㄢˊ ㄑㄧㄡ ㄑㄧㄢ。"),
        curriculumQuestion(curriculumCategories.phonics, "「秋」的注音聲符是哪一個？", "ㄑㄧㄡ ㄉㄜ˙ ㄓㄨˋ ㄧㄣˋ ㄕㄥ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", ["ㄑ", "ㄧㄡ", "ㄕ"], ["", "", ""], "ㄑ", "「秋」的聲符是ㄑ。", "ㄑㄧㄡ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄑ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "「輪流」玩秋千是什麼意思？", "ㄌㄨㄣˊ ㄌㄧㄡˊ ㄨㄢˊ ㄑㄧㄡ ㄑㄧㄢ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧˋ ㄙ˙？", ["一個一個換著玩", "大家一起搶", "只讓一個人玩"], ["ㄧˊ ㄍㄜ˙ ㄧˊ ㄍㄜ˙ ㄏㄨㄢˋ ㄓㄜ˙ ㄨㄢˊ", "ㄉㄚˋ ㄐㄧㄚ ㄧˋ ㄑㄧˇ ㄑㄧㄤˇ", "ㄓˇ ㄖㄤˋ ㄧˊ ㄍㄜ˙ ㄖㄣˊ ㄨㄢˊ"], "一個一個換著玩", "輪流就是大家依序使用。", "ㄌㄨㄣˊ ㄌㄧㄡˊ ㄐㄧㄡˋ ㄕˋ ㄉㄚˋ ㄐㄧㄚ ㄧ ㄒㄩˋ ㄕˇ ㄩㄥˋ。")
      ]),
    curriculumLesson("第一冊 7 回音", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄑㄧ ㄏㄨㄟˊ ㄧㄣ",
      "聽聽聲音在不同地方的變化，練習把觀察到的事情說清楚。",
      "ㄊㄧㄥ ㄊㄧㄥ ㄕㄥ ㄧㄣ ㄗㄞˋ ㄅㄨˋ ㄊㄨㄥˊ ㄉㄧˋ ㄈㄤ ㄉㄜ˙ ㄅㄧㄢˋ ㄏㄨㄚˋ，ㄌㄧㄢˋ ㄒㄧˊ ㄅㄚˇ ㄍㄨㄢ ㄔㄚˊ ㄉㄠˋ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ ㄕㄨㄛ ㄑㄧㄥ ㄔㄨˇ。",
      "例子：在山谷大聲說話，可能會聽見自己的聲音回來。",
      "ㄌㄧˋ ㄗ˙：ㄗㄞˋ ㄕㄢ ㄍㄨˇ ㄉㄚˋ ㄕㄥ ㄕㄨㄛ ㄏㄨㄚˋ，ㄎㄜˇ ㄋㄥˊ ㄏㄨㄟˋ ㄊㄧㄥ ㄐㄧㄢˋ ㄗˋ ㄐㄧˇ ㄉㄜ˙ ㄕㄥ ㄧㄣ ㄏㄨㄟˊ ㄌㄞˊ。",
      [
        curriculumQuestion(curriculumCategories.reading, "在山谷喊一聲後，又聽到相似的聲音，這可能是什麼？", "ㄗㄞˋ ㄕㄢ ㄍㄨˇ ㄏㄢˇ ㄧˋ ㄕㄥ ㄏㄡˋ，ㄧㄡˋ ㄊㄧㄥ ㄉㄠˋ ㄒㄧㄤ ㄙˋ ㄉㄜ˙ ㄕㄥ ㄧㄣ，ㄓㄜˋ ㄎㄜˇ ㄋㄥˊ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", ["回音", "雨滴", "車鈴"], ["ㄏㄨㄟˊ ㄧㄣ", "ㄩˇ ㄉㄧ", "ㄔㄜ ㄌㄧㄥˊ"], "回音", "回音是聲音傳出去後反射回來。", "ㄏㄨㄟˊ ㄧㄣ ㄕˋ ㄕㄥ ㄧㄣ ㄔㄨㄢˊ ㄔㄨ ㄑㄩˋ ㄏㄡˋ ㄈㄢˇ ㄕㄜˋ ㄏㄨㄟˊ ㄌㄞˊ。"),
        curriculumQuestion(curriculumCategories.vocabulary, "哪個地方比較容易聽見回音？", "ㄋㄚˇ ㄍㄜ˙ ㄉㄧˋ ㄈㄤ ㄅㄧˇ ㄐㄧㄠˋ ㄖㄨㄥˊ ㄧˋ ㄊㄧㄥ ㄐㄧㄢˋ ㄏㄨㄟˊ ㄧㄣ？", ["空曠的山谷", "棉被裡", "安靜的耳機裡"], ["ㄎㄨㄥ ㄎㄨㄤˋ ㄉㄜ˙ ㄕㄢ ㄍㄨˇ", "ㄇㄧㄢˊ ㄅㄟˋ ㄌㄧˇ", "ㄢ ㄐㄧㄥˋ ㄉㄜ˙ ㄦˇ ㄐㄧ ㄌㄧˇ"], "空曠的山谷", "山谷會把聲音反射回來，可能聽見回音。", "ㄕㄢ ㄍㄨˇ ㄏㄨㄟˋ ㄅㄚˇ ㄕㄥ ㄧㄣ ㄈㄢˇ ㄕㄜˋ ㄏㄨㄟˊ ㄌㄞˊ，ㄎㄜˇ ㄋㄥˊ ㄊㄧㄥ ㄐㄧㄢˋ ㄏㄨㄟˊ ㄧㄣ。"),
        curriculumQuestion(curriculumCategories.phonics, "「回」的注音聲符是哪一個？", "ㄏㄨㄟˊ ㄉㄜ˙ ㄓㄨˋ ㄧㄣˋ ㄕㄥ ㄈㄨˊ ㄕˋ ㄋㄚˇ ㄧˊ ㄍㄜ˙？", ["ㄏ", "ㄨㄟ", "ㄍ"], ["", "", ""], "ㄏ", "「回」的聲符是ㄏ。", "ㄏㄨㄟˊ ㄉㄜ˙ ㄕㄥ ㄈㄨˊ ㄕˋ ㄏ。")
      ]),
    curriculumLesson("統整活動二：問號", "ㄊㄨㄥˇ ㄓㄥˇ ㄏㄨㄛˊ ㄉㄨㄥˋ ㄦˋ ㄨㄣˋ ㄏㄠˋ",
      "認識問號，練習聽懂問句並用完整、合適的話回答。",
      "ㄖㄣˋ ㄕˋ ㄨㄣˋ ㄏㄠˋ，ㄌㄧㄢˋ ㄒㄧˊ ㄊㄧㄥ ㄉㄨㄥˇ ㄨㄣˋ ㄐㄩˋ ㄅㄧㄥˋ ㄩㄥˋ ㄨㄢˊ ㄓㄥˇ、ㄏㄜˊ ㄕˋ ㄉㄜ˙ ㄏㄨㄚˋ ㄏㄨㄟˊ ㄉㄚˊ。",
      "例子：你喜歡哪一種水果？我喜歡蘋果。",
      "ㄌㄧˋ ㄗ˙：ㄋㄧˇ ㄒㄧˇ ㄏㄨㄢ ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄕㄨㄟˇ ㄍㄨㄛˇ？ㄨㄛˇ ㄒㄧˇ ㄏㄨㄢ ㄆㄧㄥˊ ㄍㄨㄛˇ。",
      [
        curriculumQuestion(curriculumCategories.punctuation, "「你要去哪裡＿＿」句尾應放什麼？", "ㄋㄧˇ ㄧㄠˋ ㄑㄩˋ ㄋㄚˇ ㄌㄧˇ，ㄐㄩˋ ㄨㄟˇ ㄧㄥ ㄈㄤˋ ㄕㄣˊ ㄇㄜ˙？", ["問號", "逗號", "句號"], ["ㄨㄣˋ ㄏㄠˋ", "ㄉㄡˋ ㄏㄠˋ", "ㄐㄩˋ ㄏㄠˋ"], "問號", "這句在問問題，句尾要用問號。", "ㄓㄜˋ ㄐㄩˋ ㄗㄞˋ ㄨㄣˋ ㄨㄣˋ ㄊㄧˊ，ㄐㄩˋ ㄨㄟˇ ㄧㄠˋ ㄩㄥˋ ㄨㄣˋ ㄏㄠˋ。"),
        curriculumQuestion(curriculumCategories.punctuation, "哪一個符號是問號？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄈㄨˊ ㄏㄠˋ ㄕˋ ㄨㄣˋ ㄏㄠˋ？", ["？", "，", "。"], ["", "", ""], "？", "問號表示這是一個問題。", "ㄨㄣˋ ㄏㄠˋ ㄅㄧㄠˇ ㄕˋ ㄓㄜˋ ㄕˋ ㄧˊ ㄍㄜ˙ ㄨㄣˋ ㄊㄧˊ。"),
        curriculumQuestion(curriculumCategories.reading, "聽到「你今天開心嗎？」這句話，哪一種回答最合適？", "ㄊㄧㄥ ㄉㄠˋ ㄋㄧˇ ㄐㄧㄣ ㄊㄧㄢ ㄎㄞ ㄒㄧㄣ ㄇㄚ˙，ㄓㄜˋ ㄐㄩˋ ㄏㄨㄚˋ，ㄋㄚˇ ㄧˋ ㄓㄨㄥˇ ㄏㄨㄟˊ ㄉㄚˊ ㄗㄨㄟˋ ㄏㄜˊ ㄕˋ？", ["我今天很開心。", "桌上有一本書。", "明天會下雨。"], ["ㄨㄛˇ ㄐㄧㄣ ㄊㄧㄢ ㄏㄣˇ ㄎㄞ ㄒㄧㄣ", "ㄓㄨㄛ ㄕㄤˋ ㄧㄡˇ ㄧˋ ㄅㄣˇ ㄕㄨ", "ㄇㄧㄥˊ ㄊㄧㄢ ㄏㄨㄟˋ ㄒㄧㄚˋ ㄩˇ"], "我今天很開心。", "回答要和問題問的事情有關。", "ㄏㄨㄟˊ ㄉㄚˊ ㄧㄠˋ ㄏㄜˊ ㄨㄣˋ ㄊㄧˊ ㄨㄣˋ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ ㄧㄡˇ ㄍㄨㄢ。")
      ]),
    curriculumLesson("第一冊來閱讀：妹妹寫的字", "ㄉㄧˋ ㄧ ㄘㄜˋ ㄌㄞˊ ㄩㄝˋ ㄉㄨˊ ㄇㄟˋ ㄇㄟ˙ ㄒㄧㄝˇ ㄉㄜ˙ ㄗˋ",
      "讀原創生活短文，找出人物、事情和年節習俗相關線索。",
      "ㄉㄨˊ ㄩㄢˊ ㄔㄨㄤˋ ㄕㄥ ㄏㄨㄛˊ ㄉㄨㄢˇ ㄨㄣˊ，ㄓㄠˇ ㄔㄨ ㄖㄣˊ ㄨˋ、ㄕˋ ㄑㄧㄥˊ ㄏㄜˊ ㄋㄧㄢˊ ㄐㄧㄝˊ ㄒㄧˊ ㄙㄨˊ ㄒㄧㄤ ㄍㄨㄢ ㄒㄧㄢˋ ㄙㄨㄛˇ。",
      "原創閱讀：妹妹為家人寫下祝福卡片，大家一起貼春聯、分享新年心願。",
      "ㄩㄢˊ ㄔㄨㄤˋ ㄩㄝˋ ㄉㄨˊ：ㄇㄟˋ ㄇㄟ˙ ㄨㄟˋ ㄐㄧㄚ ㄖㄣˊ ㄒㄧㄝˇ ㄒㄧㄚˋ ㄓㄨˋ ㄈㄨˊ ㄎㄚˇ ㄆㄧㄢˋ，ㄉㄚˋ ㄐㄧㄚ ㄧˋ ㄑㄧˇ ㄊㄧㄝ ㄔㄨㄣ ㄌㄧㄢˊ、ㄈㄣ ㄒㄧㄤˇ ㄒㄧㄣ ㄋㄧㄢˊ ㄒㄧㄣ ㄩㄢˋ。",
      [
        curriculumQuestion(curriculumCategories.reading, "妹妹寫了什麼送給家人？", "ㄇㄟˋ ㄇㄟ˙ ㄒㄧㄝˇ ㄌㄜ˙ ㄕㄣˊ ㄇㄜ˙ ㄙㄨㄥˋ ㄍㄟˇ ㄐㄧㄚ ㄖㄣˊ？", ["祝福卡片", "購物清單", "功課本"], ["ㄓㄨˋ ㄈㄨˊ ㄎㄚˇ ㄆㄧㄢˋ", "ㄍㄡˋ ㄨˋ ㄑㄧㄥ ㄉㄢ", "ㄍㄨㄥ ㄎㄜˋ ㄅㄣˇ"], "祝福卡片", "短文說妹妹寫祝福卡片送給家人。", "ㄉㄨㄢˇ ㄨㄣˊ ㄕㄨㄛ ㄇㄟˋ ㄇㄟ˙ ㄒㄧㄝˇ ㄓㄨˋ ㄈㄨˊ ㄎㄚˇ ㄆㄧㄢˋ ㄙㄨㄥˋ ㄍㄟˇ ㄐㄧㄚ ㄖㄣˊ。"),
        curriculumQuestion(curriculumCategories.reading, "家人一起做哪件年節活動？", "ㄐㄧㄚ ㄖㄣˊ ㄧˋ ㄑㄧˇ ㄗㄨㄛˋ ㄋㄚˇ ㄐㄧㄢˋ ㄋㄧㄢˊ ㄐㄧㄝˊ ㄏㄨㄛˊ ㄉㄨㄥˋ？", ["貼春聯", "堆雪人", "挖沙坑"], ["ㄊㄧㄝ ㄔㄨㄣ ㄌㄧㄢˊ", "ㄉㄨㄟ ㄒㄩㄝˇ ㄖㄣˊ", "ㄨㄚ ㄕㄚ ㄎㄥ"], "貼春聯", "短文提到家人一起貼春聯。", "ㄉㄨㄢˇ ㄨㄣˊ ㄊㄧˊ ㄉㄠˋ ㄐㄧㄚ ㄖㄣˊ ㄧˋ ㄑㄧˇ ㄊㄧㄝ ㄔㄨㄣ ㄌㄧㄢˊ。"),
        curriculumQuestion(curriculumCategories.reading, "讀短文找答案時，先注意什麼比較有幫助？", "ㄉㄨˊ ㄉㄨㄢˇ ㄨㄣˊ ㄓㄠˇ ㄉㄚˊ ㄢˋ ㄕˊ，ㄒㄧㄢ ㄓㄨˋ ㄧˋ ㄕㄣˊ ㄇㄜ˙ ㄅㄧˇ ㄐㄧㄠˋ ㄧㄡˇ ㄅㄤ ㄓㄨˋ？", ["人物和做的事情", "紙張的顏色", "書本的重量"], ["ㄖㄣˊ ㄨˋ ㄏㄜˊ ㄗㄨㄛˋ ㄉㄜ˙ ㄕˋ ㄑㄧㄥˊ", "ㄓˇ ㄓㄤ ㄉㄜ˙ ㄧㄢˊ ㄙㄜˋ", "ㄕㄨ ㄅㄣˇ ㄉㄜ˙ ㄓㄨㄥˋ ㄌㄧㄤˋ"], "人物和做的事情", "先找人物和事情，有助於理解短文。", "ㄒㄧㄢ ㄓㄠˇ ㄖㄣˊ ㄨˋ ㄏㄜˊ ㄕˋ ㄑㄧㄥˊ，ㄧㄡˇ ㄓㄨˋ ㄩˊ ㄌㄧˇ ㄐㄧㄝˇ ㄉㄨㄢˇ ㄨㄣˊ。")
      ])
  ];

  const mathCategoryQuestions = (category, rows) => rows.map(([first, second]) =>
    curriculumQuestion(
      category,
      `${first} 和 ${second}，哪個數字比較大？`,
      `${numberZhuyin(first)} ㄏㄜˊ ${numberZhuyin(second)}，ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄅㄧˇ ㄐㄧㄠˋ ㄉㄚˋ？`,
      [String(first), String(second), String(Math.max(first, second) + 1)],
      [numberZhuyin(first), numberZhuyin(second), numberZhuyin(Math.max(first, second) + 1)],
      String(Math.max(first, second)),
      `${Math.max(first, second)} 比 ${Math.min(first, second)} 大。`,
      `${numberZhuyin(Math.max(first, second))} ㄅㄧˇ ${numberZhuyin(Math.min(first, second))} ㄉㄚˋ。`
    )
  );

  const mathLesson = (title, titleZhuyin, teaching, teachingZhuyin, example, exampleZhuyin, questions) =>
    curriculumLesson(title, titleZhuyin, teaching, teachingZhuyin, example, exampleZhuyin, questions);

  courseData.math = [
    mathLesson("1 數到 10", "ㄧ ㄕㄨˇ ㄉㄠˋ ㄕˊ",
      "唱數、讀寫 1 到 10，並認識 0 表示沒有。",
      "ㄔㄤˋ ㄕㄨˋ、ㄉㄨˊ ㄒㄧㄝˇ ㄧ ㄉㄠˋ ㄕˊ，ㄅㄧㄥˋ ㄖㄣˋ ㄕˋ ㄌㄧㄥˊ ㄅㄧㄠˇ ㄕˋ ㄇㄟˊ ㄧㄡˇ。",
      "例子：盤子裡沒有糖果，可以用 0 表示。",
      "ㄌㄧˋ ㄗ˙：ㄆㄢˊ ㄗ˙ ㄌㄧˇ ㄇㄟˊ ㄧㄡˇ ㄊㄤˊ ㄍㄨㄛˇ，ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄌㄧㄥˊ ㄅㄧㄠˇ ㄕˋ。",
      [
        curriculumQuestion(curriculumCategories.counting, "從 1 往後數：1、2、3，接下來是幾？", "ㄘㄨㄥˊ ㄧ ㄨㄤˇ ㄏㄡˋ ㄕㄨˇ：ㄧ、ㄦˋ、ㄙㄢ，ㄐㄧㄝ ㄒㄧㄚˋ ㄌㄞˊ ㄕˋ ㄐㄧˇ？", ["4", "5", "6"], ["ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ"], "4", "3後面是4。", "ㄙㄢ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄙˋ。"),
        curriculumQuestion(curriculumCategories.counting, "盒子裡沒有球，可以用哪個數表示？", "ㄏㄜˊ ㄗ˙ ㄌㄧˇ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄡˊ，ㄎㄜˇ ㄧˇ ㄩㄥˋ ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄅㄧㄠˇ ㄕˋ？", ["0", "1", "2"], ["ㄌㄧㄥˊ", "ㄧ", "ㄦˋ"], "0", "0可以表示沒有球。", "ㄌㄧㄥˊ ㄎㄜˇ ㄧˇ ㄅㄧㄠˇ ㄕˋ ㄇㄟˊ ㄧㄡˇ ㄑㄧㄡˊ。"),
        curriculumQuestion(curriculumCategories.counting, "數字 8 前面的一個數是幾？", "ㄕㄨˋ ㄗˋ ㄅㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄉㄜ˙ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？", ["6", "7", "9"], ["ㄌㄧㄡˋ", "ㄑㄧ", "ㄐㄧㄡˇ"], "7", "6、7、8，8前面是7。", "ㄌㄧㄡˋ、ㄑㄧ、ㄅㄚ，ㄅㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄕˋ ㄑㄧ。"),
        curriculumQuestion(curriculumCategories.counting, "哪一個數字表示三個物品？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄅㄧㄠˇ ㄕˋ ㄙㄢ ㄍㄜ˙ ㄨˋ ㄆㄧㄣˇ？", ["2", "3", "4"], ["ㄦˋ", "ㄙㄢ", "ㄙˋ"], "3", "三個物品用數字3表示。", "ㄙㄢ ㄍㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄩㄥˋ ㄕㄨˋ ㄗˋ ㄙㄢ ㄅㄧㄠˇ ㄕˋ。"),
        curriculumQuestion(curriculumCategories.counting, "從 5 往後數兩個數：5、6、＿＿，空格是幾？", "ㄘㄨㄥˊ ㄨˇ ㄨㄤˇ ㄏㄡˋ ㄕㄨˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄕㄨˋ：ㄨˇ、ㄌㄧㄡˋ，ㄎㄨㄥ ㄍㄜˊ ㄕˋ ㄐㄧˇ？", ["6", "7", "8"], ["ㄌㄧㄡˋ", "ㄑㄧ", "ㄅㄚ"], "7", "5、6、7，空格是7。", "ㄨˇ、ㄌㄧㄡˋ、ㄑㄧ，ㄎㄨㄥ ㄍㄜˊ ㄕˋ ㄑㄧ。"),
        curriculumQuestion(curriculumCategories.counting, "哪一個數字在 9 的後面？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄗㄞˋ ㄐㄧㄡˇ ㄉㄜ˙ ㄏㄡˋ ㄇㄧㄢˋ？", ["8", "10", "7"], ["ㄅㄚ", "ㄕˊ", "ㄑㄧ"], "10", "9後面是10。", "ㄐㄧㄡˇ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄕˊ。"),
        curriculumQuestion(curriculumCategories.counting, "手上有 4 顆葡萄，再多拿 1 顆，現在有幾顆？", "ㄕㄡˇ ㄕㄤˋ ㄧㄡˇ ㄙˋ ㄎㄜ ㄆㄨˊ ㄊㄠˊ，ㄗㄞˋ ㄉㄨㄛ ㄋㄚˊ ㄧ ㄎㄜ，ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄐㄧˇ ㄎㄜ？", ["4", "5", "6"], ["ㄙˋ", "ㄨˇ", "ㄌㄧㄡˋ"], "5", "4再多1顆是5顆。", "ㄙˋ ㄗㄞˋ ㄉㄨㄛ ㄧ ㄎㄜ ㄕˋ ㄨˇ ㄎㄜ。"),
        curriculumQuestion(curriculumCategories.counting, "下列哪個數字讀作「六」？", "ㄒㄧㄚˋ ㄌㄧㄝˋ ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄉㄨˊ ㄗㄨㄛˋ ㄌㄧㄡˋ？", ["5", "6", "9"], ["ㄨˇ", "ㄌㄧㄡˋ", "ㄐㄧㄡˇ"], "6", "數字6讀作六。", "ㄕㄨˋ ㄗˋ ㄌㄧㄡˋ ㄉㄨˊ ㄗㄨㄛˋ ㄌㄧㄡˋ。"),
        curriculumQuestion(curriculumCategories.counting, "數一數：🍎🍎🍎🍎，一共有幾個蘋果？", "ㄕㄨˇ ㄧˋ ㄕㄨˇ：ㄧˊ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄍㄜ˙ ㄆㄧㄥˊ ㄍㄨㄛˇ？", ["3", "4", "5"], ["ㄙㄢ", "ㄙˋ", "ㄨˇ"], "4", "一共有4個蘋果。", "ㄧˋ ㄍㄨㄥˋ ㄧㄡˇ ㄙˋ ㄍㄜ˙ ㄆㄧㄥˊ ㄍㄨㄛˇ。"),
        curriculumQuestion(curriculumCategories.counting, "哪一個數字比 3 多 1？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄗˋ ㄅㄧˇ ㄙㄢ ㄉㄨㄛ ㄧ？", ["2", "4", "5"], ["ㄦˋ", "ㄙˋ", "ㄨˇ"], "4", "3多1是4。", "ㄙㄢ ㄉㄨㄛ ㄧ ㄕˋ ㄙˋ。")
      ]),
    mathLesson("2 比長短", "ㄦˋ ㄅㄧˇ ㄔㄤˊ ㄉㄨㄢˇ",
      "把物品的一端對齊再比較長短，也能比較直線和彎曲的線。",
      "ㄅㄚˇ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄧˋ ㄉㄨㄢ ㄉㄨㄟˋ ㄑㄧˊ ㄗㄞˋ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ ㄉㄨㄢˇ，ㄧㄝˇ ㄋㄥˊ ㄅㄧˇ ㄐㄧㄠˋ ㄓˊ ㄒㄧㄢˋ ㄏㄜˊ ㄨㄢ ㄑㄩ ㄉㄜ˙ ㄒㄧㄢˋ。",
      "例子：把兩枝筆的筆尖對齊，就能看出哪一枝比較長。",
      "ㄌㄧˋ ㄗ˙：ㄅㄚˇ ㄌㄧㄤˇ ㄓ ㄅㄧˇ ㄉㄜ˙ ㄅㄧˇ ㄐㄧㄢ ㄉㄨㄟˋ ㄑㄧˊ，ㄐㄧㄡˋ ㄋㄥˊ ㄎㄢˋ ㄔㄨ ㄋㄚˇ ㄧˋ ㄓ ㄅㄧˇ ㄐㄧㄠˋ ㄔㄤˊ。",
      [
        makeLengthQuestion(5, 9), makeLengthQuestion(7, 12), makeLengthQuestion(8, 15),
        makeLengthQuestion(6, 10), makeLengthQuestion(11, 14), makeLengthQuestion(9, 16),
        makeLengthQuestion(4, 13), makeLengthQuestion(10, 18), makeLengthQuestion(3, 11),
        makeLengthQuestion(12, 20)
      ]),
    mathLesson("3 分與合", "ㄙㄢ ㄈㄣ ㄩˇ ㄏㄜˊ",
      "把 10 以內的數分成兩部分，也可以把兩部分合起來。",
      "ㄅㄚˇ ㄕˊ ㄧˇ ㄋㄟˋ ㄉㄜ˙ ㄕㄨˋ ㄈㄣ ㄔㄥˊ ㄌㄧㄤˇ ㄅㄨˋ ㄈㄣ˙，ㄧㄝˇ ㄎㄜˇ ㄧˇ ㄅㄚˇ ㄌㄧㄤˇ ㄅㄨˋ ㄈㄣ˙ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ。",
      "例子：7可以分成3和4；3和4合起來是7。",
      "ㄌㄧˋ ㄗ˙：ㄑㄧ ㄎㄜˇ ㄧˇ ㄈㄣ ㄔㄥˊ ㄙㄢ ㄏㄜˊ ㄙˋ；ㄙㄢ ㄏㄜˊ ㄙˋ ㄏㄜˊ ㄑㄧˇ ㄌㄞˊ ㄕˋ ㄑㄧ。",
      [
        makeDecompositionQuestion(7, 3, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(8, 5, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(9, 4, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(6, 2, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(10, 7, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(5, 1, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(9, 6, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(8, 2, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(10, 4, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin),
        makeDecompositionQuestion(6, 5, curriculumCategories.decomposition.title, curriculumCategories.decomposition.zhuyin)
      ]),
    mathLesson("4 順序和多少", "ㄙˋ ㄕㄨㄣˋ ㄒㄩˋ ㄏㄜˊ ㄉㄨㄛ ㄕㄠˇ",
      "排出 10 以內數字的先後，並用一一對應比較數量。",
      "ㄆㄞˊ ㄔㄨ ㄕˊ ㄧˇ ㄋㄟˋ ㄕㄨˋ ㄗˋ ㄉㄜ˙ ㄒㄧㄢ ㄏㄡˋ，ㄅㄧㄥˋ ㄩㄥˋ ㄧˋ ㄧ ㄉㄨㄟˋ ㄧㄥˋ ㄅㄧˇ ㄐㄧㄠˋ ㄕㄨˋ ㄌㄧㄤˋ。",
      "例子：5排在8前面；4顆比3顆多。",
      "ㄌㄧˋ ㄗ˙：ㄨˇ ㄆㄞˊ ㄗㄞˋ ㄅㄚ ㄑㄧㄢˊ ㄇㄧㄢˋ；ㄙˋ ㄎㄜ ㄅㄧˇ ㄙㄢ ㄎㄜ ㄉㄨㄛ。",
      [
        curriculumQuestion(curriculumCategories.ordering, "從小到大排列：2、5、3，最前面是哪個數？", "ㄘㄨㄥˊ ㄒㄧㄠˇ ㄉㄠˋ ㄉㄚˋ ㄆㄞˊ ㄌㄧㄝˋ：ㄦˋ、ㄨˇ、ㄙㄢ，ㄗㄨㄟˋ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄕˋ ㄋㄚˇ ㄍㄜ˙ ㄕㄨˋ？", ["2", "3", "5"], ["ㄦˋ", "ㄙㄢ", "ㄨˇ"], "2", "從小到大排，2在最前面。", "ㄘㄨㄥˊ ㄒㄧㄠˇ ㄉㄠˋ ㄉㄚˋ ㄆㄞˊ，ㄦˋ ㄗㄞˋ ㄗㄨㄟˋ ㄑㄧㄢˊ ㄇㄧㄢˋ。"),
        curriculumQuestion(curriculumCategories.ordering, "從大到小排列：4、9、6，第一個數是幾？", "ㄘㄨㄥˊ ㄉㄚˋ ㄉㄠˋ ㄒㄧㄠˇ ㄆㄞˊ ㄌㄧㄝˋ：ㄙˋ、ㄐㄧㄡˇ、ㄌㄧㄡˋ，ㄉㄧˋ ㄧ ㄍㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？", ["4", "6", "9"], ["ㄙˋ", "ㄌㄧㄡˋ", "ㄐㄧㄡˇ"], "9", "從大到小排，最大的9排第一個。", "ㄘㄨㄥˊ ㄉㄚˋ ㄉㄠˋ ㄒㄧㄠˇ ㄆㄞˊ，ㄗㄨㄟˋ ㄉㄚˋ ㄉㄜ˙ ㄐㄧㄡˇ ㄆㄞˊ ㄉㄧˋ ㄧ ㄍㄜ˙。"),
        curriculumQuestion(curriculumCategories.ordering, "6的前面一個數是幾？", "ㄌㄧㄡˋ ㄉㄜ˙ ㄑㄧㄢˊ ㄇㄧㄢˋ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？", ["5", "6", "7"], ["ㄨˇ", "ㄌㄧㄡˋ", "ㄑㄧ"], "5", "5排在6前面。", "ㄨˇ ㄆㄞˊ ㄗㄞˋ ㄌㄧㄡˋ ㄑㄧㄢˊ ㄇㄧㄢˋ。"),
        curriculumQuestion(curriculumCategories.ordering, "4的後面一個數是幾？", "ㄙˋ ㄉㄜ˙ ㄏㄡˋ ㄇㄧㄢˋ ㄧˊ ㄍㄜ˙ ㄕㄨˋ ㄕˋ ㄐㄧˇ？", ["3", "5", "6"], ["ㄙㄢ", "ㄨˇ", "ㄌㄧㄡˋ"], "5", "4後面是5。", "ㄙˋ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄨˇ。"),
        ...mathCategoryQuestions(curriculumCategories.comparison, [[2, 5], [8, 3], [4, 7], [9, 6], [1, 10], [5, 8]])
      ]),
    mathLesson("5 數到 30", "ㄨˇ ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ",
      "從 11 數到 30，認識十幾、二十幾和整十數，並比較大小。",
      "ㄘㄨㄥˊ ㄕˊ ㄧ ㄕㄨˇ ㄉㄠˋ ㄙㄢ ㄕˊ，ㄖㄣˋ ㄕˋ ㄕˊ ㄐㄧˇ、ㄦˋ ㄕˊ ㄐㄧˇ ㄏㄜˊ ㄓㄥˇ ㄕˊ ㄕㄨˋ，ㄅㄧㄥˋ ㄅㄧˇ ㄐㄧㄠˋ ㄉㄚˋ ㄒㄧㄠˇ。",
      "例子：20後面是21；29再多1就是30。",
      "ㄌㄧˋ ㄗ˙：ㄦˋ ㄕˊ ㄏㄡˋ ㄇㄧㄢˋ ㄕˋ ㄦˋ ㄕˊ ㄧ；ㄦˋ ㄕˊ ㄐㄧㄡˇ ㄗㄞˋ ㄉㄨㄛ ㄧ ㄐㄧㄡˋ ㄕˋ ㄙㄢ ㄕˊ。",
      [
        makeCountQuestion(10, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(14, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(19, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(20, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(21, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(24, "數到30", curriculumCategories.counting.zhuyin),
        makeCountQuestion(29, "數到30", curriculumCategories.counting.zhuyin),
        ...mathCategoryQuestions(curriculumCategories.comparison, [[12, 21], [28, 18], [25, 30]])
      ]),
    mathLesson("6 加一加", "ㄌㄧㄡˋ ㄐㄧㄚ ㄧˋ ㄐㄧㄚ",
      "練習和在 10 以內的加法，交換兩個加數位置也能得到相同答案。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄏㄜˊ ㄗㄞˋ ㄕˊ ㄧˇ ㄋㄟˋ ㄉㄜ˙ ㄐㄧㄚ ㄈㄚˇ，ㄐㄧㄠ ㄏㄨㄢˋ ㄌㄧㄤˇ ㄍㄜ˙ ㄐㄧㄚ ㄕㄨˋ ㄨㄟˋ ㄓˋ ㄧㄝˇ ㄋㄥˊ ㄉㄜˊ ㄉㄠˋ ㄒㄧㄤ ㄊㄨㄥˊ ㄉㄚˊ ㄢˋ。",
      "例子：3加4等於7，4加3也等於7。",
      "ㄌㄧˋ ㄗ˙：ㄙㄢ ㄐㄧㄚ ㄙˋ ㄉㄥˇ ㄩˊ ㄑㄧ，ㄙˋ ㄐㄧㄚ ㄙㄢ ㄧㄝˇ ㄉㄥˇ ㄩˊ ㄑㄧ。",
      [
        makeArithmeticQuestion(3, 4, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(4, 3, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(2, 6, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(6, 2, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(5, 5, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(1, 8, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(8, 1, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(4, 4, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(2, 7, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin),
        makeArithmeticQuestion(3, 6, "+", curriculumCategories.addition.title, curriculumCategories.addition.zhuyin)
      ]),
    mathLesson("7 認識形狀", "ㄑㄧ ㄖㄣˋ ㄕˋ ㄒㄧㄥˊ ㄓㄨㄤˋ",
      "觀察平面和立體圖形的特徵，找出平面、曲面及簡單的圖形規律。",
      "ㄍㄨㄢ ㄔㄚˊ ㄆㄧㄥˊ ㄇㄧㄢˋ ㄏㄜˊ ㄌㄧˋ ㄊㄧˇ ㄊㄨˊ ㄒㄧㄥˊ ㄉㄜ˙ ㄊㄜˋ ㄓㄥ，ㄓㄠˇ ㄔㄨ ㄆㄧㄥˊ ㄇㄧㄢˋ、ㄑㄩ ㄇㄧㄢˋ ㄐㄧˊ ㄐㄧㄢˇ ㄉㄢ ㄉㄜ˙ ㄊㄨˊ ㄒㄧㄥˊ ㄍㄨㄟ ㄌㄩˋ。",
      "例子：球有曲面；正方形是平面圖形。",
      "ㄌㄧˋ ㄗ˙：ㄑㄧㄡˊ ㄧㄡˇ ㄑㄩ ㄇㄧㄢˋ；ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄕˋ ㄆㄧㄥˊ ㄇㄧㄢˋ ㄊㄨˊ ㄒㄧㄥˊ。",
      [
        curriculumQuestion(curriculumCategories.shapes, "哪一個物品有曲面？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄧㄡˇ ㄑㄩ ㄇㄧㄢˋ？", ["球", "方形紙片", "書本封面"], ["ㄑㄧㄡˊ", "ㄈㄤ ㄒㄧㄥˊ ㄓˇ ㄆㄧㄢˋ", "ㄕㄨ ㄅㄣˇ ㄈㄥ ㄇㄧㄢˋ"], "球", "球的表面是彎曲的曲面。", "ㄑㄧㄡˊ ㄉㄜ˙ ㄅㄧㄠˇ ㄇㄧㄢˋ ㄕˋ ㄨㄢ ㄑㄩ ㄉㄜ˙ ㄑㄩ ㄇㄧㄢˋ。"),
        curriculumQuestion(curriculumCategories.shapes, "哪一個是立體物品？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕˋ ㄌㄧˋ ㄊㄧˇ ㄨˋ ㄆㄧㄣˇ？", ["積木方塊", "紙上畫的圓", "紙上畫的三角形"], ["ㄐㄧ ㄇㄨˋ ㄈㄤ ㄎㄨㄞˋ", "ㄓˇ ㄕㄤˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄩㄢˊ", "ㄓˇ ㄕㄤˋ ㄏㄨㄚˋ ㄉㄜ˙ ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ"], "積木方塊", "積木方塊有長、寬、高，是立體物品。", "ㄐㄧ ㄇㄨˋ ㄈㄤ ㄎㄨㄞˋ ㄧㄡˇ ㄔㄤˊ、ㄎㄨㄢ、ㄍㄠ，ㄕˋ ㄌㄧˋ ㄊㄧˇ ㄨˋ ㄆㄧㄣˇ。"),
        curriculumQuestion(curriculumCategories.shapes, "哪一個是平面圖形？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕˋ ㄆㄧㄥˊ ㄇㄧㄢˋ ㄊㄨˊ ㄒㄧㄥˊ？", ["三角形", "籃球", "橘子"], ["ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ", "ㄌㄢˊ ㄑㄧㄡˊ", "ㄐㄩˊ ㄗ˙"], "三角形", "三角形畫在紙上，是平面圖形。", "ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄏㄨㄚˋ ㄗㄞˋ ㄓˇ ㄕㄤˋ，ㄕˋ ㄆㄧㄥˊ ㄇㄧㄢˋ ㄊㄨˊ ㄒㄧㄥˊ。"),
        curriculumQuestion(curriculumCategories.shapes, "圓形的邊是什麼樣子？", "ㄩㄢˊ ㄒㄧㄥˊ ㄉㄜ˙ ㄅㄧㄢ ㄕˋ ㄕㄣˊ ㄇㄜ˙ ㄧㄤˋ ㄗ˙？", ["彎彎的", "全部是直線", "有尖尖的角"], ["ㄨㄢ ㄨㄢ ㄉㄜ˙", "ㄑㄩㄢˊ ㄅㄨˋ ㄕˋ ㄓˊ ㄒㄧㄢˋ", "ㄧㄡˇ ㄐㄧㄢ ㄐㄧㄢ ㄉㄜ˙ ㄐㄧㄠˇ"], "彎彎的", "圓形的邊是彎曲的，沒有尖角。", "ㄩㄢˊ ㄒㄧㄥˊ ㄉㄜ˙ ㄅㄧㄢ ㄕˋ ㄨㄢ ㄑㄩ ㄉㄜ˙，ㄇㄟˊ ㄧㄡˇ ㄐㄧㄢ ㄐㄧㄠˇ。"),
        curriculumQuestion(curriculumCategories.shapes, "正方形有幾條邊？", "ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄧㄡˇ ㄐㄧˇ ㄊㄧㄠˊ ㄅㄧㄢ？", ["3", "4", "5"], ["ㄙㄢ", "ㄙˋ", "ㄨˇ"], "4", "正方形有4條邊。", "ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄧㄡˇ ㄙˋ ㄊㄧㄠˊ ㄅㄧㄢ。"),
        curriculumQuestion(curriculumCategories.shapes, "哪一個物品的形狀像圓柱體？", "ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄨˋ ㄆㄧㄣˇ ㄉㄜ˙ ㄒㄧㄥˊ ㄓㄨㄤˋ ㄒㄧㄤˋ ㄩㄢˊ ㄓㄨˋ ㄊㄧˇ？", ["飲料罐", "足球", "三角尺"], ["ㄧㄣˇ ㄌㄧㄠˋ ㄍㄨㄢˋ", "ㄗㄨˊ ㄑㄧㄡˊ", "ㄙㄢ ㄐㄧㄠˇ ㄔˇ"], "飲料罐", "飲料罐有平平的底面和彎曲的側面。", "ㄧㄣˇ ㄌㄧㄠˋ ㄍㄨㄢˋ ㄧㄡˇ ㄆㄧㄥˊ ㄆㄧㄥˊ ㄉㄜ˙ ㄉㄧˇ ㄇㄧㄢˋ ㄏㄜˊ ㄨㄢ ㄑㄩ ㄉㄜ˙ ㄘㄜˋ ㄇㄧㄢˋ。"),
        curriculumQuestion(curriculumCategories.patterns, "圖形依序是○、△、○、△，下一個是什麼？", "ㄊㄨˊ ㄒㄧㄥˊ ㄧ ㄒㄩˋ ㄕˋ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", ["○", "△", "□"], ["", "", ""], "○", "圓形和三角形交替出現，下一個是圓形。", "ㄩㄢˊ ㄒㄧㄥˊ ㄏㄜˊ ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄐㄧㄠ ㄊㄧˋ ㄔㄨ ㄒㄧㄢˋ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄩㄢˊ ㄒㄧㄥˊ。"),
        curriculumQuestion(curriculumCategories.patterns, "圖形依序是□、□、○、□、□、○，下一個是什麼？", "ㄊㄨˊ ㄒㄧㄥˊ ㄧ ㄒㄩˋ ㄕˋ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄕㄣˊ ㄇㄜ˙？", ["□", "○", "△"], ["", "", ""], "□", "每兩個正方形後面接一個圓形，下一個是正方形。", "ㄇㄟˇ ㄌㄧㄤˇ ㄍㄜ˙ ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ ㄏㄡˋ ㄇㄧㄢˋ ㄐㄧㄝ ㄧˊ ㄍㄜ˙ ㄩㄢˊ ㄒㄧㄥˊ，ㄒㄧㄚˋ ㄧˊ ㄍㄜ˙ ㄕˋ ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ。"),
        curriculumQuestion(curriculumCategories.shapes, "哪個圖形有3個角？", "ㄋㄚˇ ㄍㄜ˙ ㄊㄨˊ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ？", ["三角形", "圓形", "正方形"], ["ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ", "ㄩㄢˊ ㄒㄧㄥˊ", "ㄓㄥˋ ㄈㄤ ㄒㄧㄥˊ"], "三角形", "三角形有3個角。", "ㄙㄢ ㄐㄧㄠˇ ㄒㄧㄥˊ ㄧㄡˇ ㄙㄢ ㄍㄜ˙ ㄐㄧㄠˇ。"),
        curriculumQuestion(curriculumCategories.shapes, "把球放在桌面上，球最容易往哪個方向滾？", "ㄅㄚˇ ㄑㄧㄡˊ ㄈㄤˋ ㄗㄞˋ ㄓㄨㄛ ㄇㄧㄢˋ ㄕㄤˋ，ㄑㄧㄡˊ ㄗㄨㄟˋ ㄖㄨㄥˊ ㄧˋ ㄨㄤˇ ㄋㄚˇ ㄍㄜ˙ ㄈㄤ ㄒㄧㄤˋ ㄍㄨㄣˇ？", ["沿著桌面", "往天空飛", "穿過桌子"], ["ㄧㄢˊ ㄓㄜ˙ ㄓㄨㄛ ㄇㄧㄢˋ", "ㄨㄤˇ ㄊㄧㄢ ㄎㄨㄥ ㄈㄟ", "ㄔㄨㄢ ㄍㄨㄛˋ ㄓㄨㄛ ㄗ˙"], "沿著桌面", "球的曲面能讓它在桌面上滾動。", "ㄑㄧㄡˊ ㄉㄜ˙ ㄑㄩ ㄇㄧㄢˋ ㄋㄥˊ ㄖㄤˋ ㄊㄚ ㄗㄞˋ ㄓㄨㄛ ㄇㄧㄢˋ ㄕㄤˋ ㄍㄨㄣˇ ㄉㄨㄥˋ。")
      ]),
    mathLesson("8 減一減與加減應用", "ㄅㄚ ㄐㄧㄢˇ ㄧˋ ㄐㄧㄢˇ ㄩˇ ㄐㄧㄚ ㄐㄧㄢˇ ㄧㄥˋ ㄩㄥˋ",
      "練習 10 以內減法，並從生活故事中找出要加或要減的數量。",
      "ㄌㄧㄢˋ ㄒㄧˊ ㄕˊ ㄧˇ ㄋㄟˋ ㄐㄧㄢˇ ㄈㄚˇ，ㄅㄧㄥˋ ㄘㄨㄥˊ ㄕㄥ ㄏㄨㄛˊ ㄍㄨˋ ㄕˋ ㄓㄨㄥ ㄓㄠˇ ㄔㄨ ㄧㄠˋ ㄐㄧㄚ ㄏㄨㄛˋ ㄧㄠˋ ㄐㄧㄢˇ ㄉㄜ˙ ㄕㄨˋ ㄌㄧㄤˋ。",
      "例子：有8顆橘子，吃掉3顆，還有5顆。",
      "ㄌㄧˋ ㄗ˙：ㄧㄡˇ ㄅㄚ ㄎㄜ ㄐㄩˊ ㄗ˙，ㄔ ㄉㄧㄠˋ ㄙㄢ ㄎㄜ，ㄏㄞˊ ㄧㄡˇ ㄨˇ ㄎㄜ。",
      [
        makeArithmeticQuestion(8, 3, "-", curriculumCategories.subtraction.title, curriculumCategories.subtraction.zhuyin),
        makeArithmeticQuestion(9, 4, "-", curriculumCategories.subtraction.title, curriculumCategories.subtraction.zhuyin),
        makeArithmeticQuestion(7, 2, "-", curriculumCategories.subtraction.title, curriculumCategories.subtraction.zhuyin),
        makeArithmeticQuestion(10, 6, "-", curriculumCategories.subtraction.title, curriculumCategories.subtraction.zhuyin),
        makeArithmeticQuestion(6, 5, "-", curriculumCategories.subtraction.title, curriculumCategories.subtraction.zhuyin),
        curriculumQuestion(curriculumCategories.application, "盤子有9顆餅乾，吃掉2顆，還剩幾顆？", "ㄆㄢˊ ㄗ˙ ㄧㄡˇ ㄐㄧㄡˇ ㄎㄜ ㄅㄧㄥˇ ㄍㄢ，ㄔ ㄉㄧㄠˋ ㄦˋ ㄎㄜ，ㄏㄞˊ ㄕㄥˋ ㄐㄧˇ ㄎㄜ？", ["6", "7", "8"], ["ㄌㄧㄡˋ", "ㄑㄧ", "ㄅㄚ"], "7", "9減2等於7，還有7顆。", "ㄐㄧㄡˇ ㄐㄧㄢˇ ㄦˋ ㄉㄥˇ ㄩˊ ㄑㄧ，ㄏㄞˊ ㄧㄡˇ ㄑㄧ ㄎㄜ。"),
        curriculumQuestion(curriculumCategories.application, "小明有4張貼紙，朋友又送他3張，現在有幾張？", "ㄒㄧㄠˇ ㄇㄧㄥˊ ㄧㄡˇ ㄙˋ ㄓㄤ ㄊㄧㄝ ㄓˇ，ㄆㄥˊ ㄧㄡˇ ㄧㄡˋ ㄙㄨㄥˋ ㄊㄚ ㄙㄢ ㄓㄤ，ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄐㄧˇ ㄓㄤ？", ["6", "7", "8"], ["ㄌㄧㄡˋ", "ㄑㄧ", "ㄅㄚ"], "7", "4加3等於7張。", "ㄙˋ ㄐㄧㄚ ㄙㄢ ㄉㄥˇ ㄩˊ ㄑㄧ ㄓㄤ。"),
        curriculumQuestion(curriculumCategories.application, "車上有8個人，下車3個人，又上車2個人，現在有幾個人？", "ㄔㄜ ㄕㄤˋ ㄧㄡˇ ㄅㄚ ㄍㄜ˙ ㄖㄣˊ，ㄒㄧㄚˋ ㄔㄜ ㄙㄢ ㄍㄜ˙ ㄖㄣˊ，ㄧㄡˋ ㄕㄤˋ ㄔㄜ ㄦˋ ㄍㄜ˙ ㄖㄣˊ，ㄒㄧㄢˋ ㄗㄞˋ ㄧㄡˇ ㄐㄧˇ ㄍㄜ˙ ㄖㄣˊ？", ["6", "7", "8"], ["ㄌㄧㄡˋ", "ㄑㄧ", "ㄅㄚ"], "7", "8減3再加2，等於7個人。", "ㄅㄚ ㄐㄧㄢˇ ㄙㄢ ㄗㄞˋ ㄐㄧㄚ ㄦˋ，ㄉㄥˇ ㄩˊ ㄑㄧ ㄍㄜ˙ ㄖㄣˊ。"),
        curriculumQuestion(curriculumCategories.application, "花園有5朵紅花和4朵黃花，一共有幾朵？", "ㄏㄨㄚ ㄩㄢˊ ㄧㄡˇ ㄨˇ ㄉㄨㄛˇ ㄏㄨㄥˊ ㄏㄨㄚ ㄏㄜˊ ㄙˋ ㄉㄨㄛˇ ㄏㄨㄤˊ ㄏㄨㄚ，ㄧˋ ㄍㄨㄥˋ ㄧㄡˇ ㄐㄧˇ ㄉㄨㄛˇ？", ["8", "9", "10"], ["ㄅㄚ", "ㄐㄧㄡˇ", "ㄕˊ"], "9", "5加4等於9朵花。", "ㄨˇ ㄐㄧㄚ ㄙˋ ㄉㄥˇ ㄩˊ ㄐㄧㄡˇ ㄉㄨㄛˇ ㄏㄨㄚ。"),
        curriculumQuestion(curriculumCategories.application, "有10顆彈珠，送給妹妹4顆，還剩幾顆？", "ㄧㄡˇ ㄕˊ ㄎㄜ ㄉㄢˋ ㄓㄨ，ㄙㄨㄥˋ ㄍㄟˇ ㄇㄟˋ ㄇㄟ˙ ㄙˋ ㄎㄜ，ㄏㄞˊ ㄕㄥˋ ㄐㄧˇ ㄎㄜ？", ["5", "6", "7"], ["ㄨˇ", "ㄌㄧㄡˋ", "ㄑㄧ"], "6", "10減4等於6顆。", "ㄕˊ ㄐㄧㄢˇ ㄙˋ ㄉㄥˇ ㄩˊ ㄌㄧㄡˋ ㄎㄜ。")
      ]),
    mathLesson("9 讀鐘錶", "ㄐㄧㄡˇ ㄉㄨˊ ㄓㄨㄥ ㄅㄧㄠˇ",
      "先後安排日常事情，認讀整點和幾點半。",
      "ㄒㄧㄢ ㄏㄡˋ ㄢ ㄆㄞˊ ㄖˋ ㄔㄤˊ ㄕˋ ㄑㄧㄥˊ，ㄖㄣˋ ㄉㄨˊ ㄓㄥˇ ㄉㄧㄢˇ ㄏㄜˊ ㄐㄧˇ ㄉㄧㄢˇ ㄅㄢˋ。",
      "例子：長針指著12、短針指著3，是3點；長針指著6是半點。",
      "ㄌㄧˋ ㄗ˙：ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ ㄦˋ、ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄙㄢ，ㄕˋ ㄙㄢ ㄉㄧㄢˇ；ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ ㄕˋ ㄅㄢˋ ㄉㄧㄢˇ。",
      [
        curriculumQuestion(curriculumCategories.time, "早上起床後，通常先做哪一件事？", "ㄗㄠˇ ㄕㄤˋ ㄑㄧˇ ㄔㄨㄤˊ ㄏㄡˋ，ㄊㄨㄥ ㄔㄤˊ ㄒㄧㄢ ㄗㄨㄛˋ ㄋㄚˇ ㄧˊ ㄐㄧㄢˋ ㄕˋ？", ["刷牙洗臉", "晚上睡覺", "吃晚餐"], ["ㄕㄨㄚ ㄧㄚˊ ㄒㄧˇ ㄌㄧㄢˇ", "ㄨㄢˇ ㄕㄤˋ ㄕㄨㄟˋ ㄐㄧㄠˋ", "ㄔ ㄨㄢˇ ㄘㄢ"], "刷牙洗臉", "起床後通常先整理自己，再開始一天的活動。", "ㄑㄧˇ ㄔㄨㄤˊ ㄏㄡˋ ㄊㄨㄥ ㄔㄤˊ ㄒㄧㄢ ㄓㄥˇ ㄌㄧˇ ㄗˋ ㄐㄧˇ，ㄗㄞˋ ㄎㄞ ㄕˇ ㄧˋ ㄊㄧㄢ ㄉㄜ˙ ㄏㄨㄛˊ ㄉㄨㄥˋ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著12，短針指著4，是幾點？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ ㄦˋ，ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄙˋ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ？", ["4點", "12點", "6點"], ["ㄙˋ ㄉㄧㄢˇ", "ㄕˊ ㄦˋ ㄉㄧㄢˇ", "ㄌㄧㄡˋ ㄉㄧㄢˇ"], "4點", "整點時長針指著12，短針指著4就是4點。", "ㄓㄥˇ ㄉㄧㄢˇ ㄕˊ ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ ㄦˋ，ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄙˋ ㄐㄧㄡˋ ㄕˋ ㄙˋ ㄉㄧㄢˇ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著6，短針在2和3中間，是幾點半？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ，ㄉㄨㄢˇ ㄓㄣ ㄗㄞˋ ㄦˋ ㄏㄜˊ ㄙㄢ ㄓㄨㄥ ㄐㄧㄢ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ ㄅㄢˋ？", ["2點半", "3點半", "6點半"], ["ㄦˋ ㄉㄧㄢˇ ㄅㄢˋ", "ㄙㄢ ㄉㄧㄢˇ ㄅㄢˋ", "ㄌㄧㄡˋ ㄉㄧㄢˇ ㄅㄢˋ"], "2點半", "長針指著6表示半點，短針走過2、還沒到3，是2點半。", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ ㄅㄧㄠˇ ㄕˋ ㄅㄢˋ ㄉㄧㄢˇ，ㄉㄨㄢˇ ㄓㄣ ㄍㄨㄛˋ ㄌㄜ˙ ㄦˋ、ㄏㄞˊ ㄇㄟˊ ㄉㄠˋ ㄙㄢ，ㄕˋ ㄦˋ ㄉㄧㄢˇ ㄅㄢˋ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著12，短針指著7，是幾點？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ ㄦˋ，ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄑㄧ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ？", ["7點", "12點", "5點"], ["ㄑㄧ ㄉㄧㄢˇ", "ㄕˊ ㄦˋ ㄉㄧㄢˇ", "ㄨˇ ㄉㄧㄢˇ"], "7點", "整點時短針指著7，時間就是7點。", "ㄓㄥˇ ㄉㄧㄢˇ ㄕˊ ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄑㄧ，ㄕˊ ㄐㄧㄢ ㄐㄧㄡˋ ㄕˋ ㄑㄧ ㄉㄧㄢˇ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著6，短針在5和6中間，是幾點半？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ，ㄉㄨㄢˇ ㄓㄣ ㄗㄞˋ ㄨˇ ㄏㄜˊ ㄌㄧㄡˋ ㄓㄨㄥ ㄐㄧㄢ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ ㄅㄢˋ？", ["5點半", "6點半", "12點半"], ["ㄨˇ ㄉㄧㄢˇ ㄅㄢˋ", "ㄌㄧㄡˋ ㄉㄧㄢˇ ㄅㄢˋ", "ㄕˊ ㄦˋ ㄉㄧㄢˇ ㄅㄢˋ"], "5點半", "短針在5和6中間、長針指著6，是5點半。", "ㄉㄨㄢˇ ㄓㄣ ㄗㄞˋ ㄨˇ ㄏㄜˊ ㄌㄧㄡˋ ㄓㄨㄥ ㄐㄧㄢ、ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ，ㄕˋ ㄨˇ ㄉㄧㄢˇ ㄅㄢˋ。"),
        curriculumQuestion(curriculumCategories.time, "下課後、回家前，通常先做哪件事？", "ㄒㄧㄚˋ ㄎㄜˋ ㄏㄡˋ、ㄏㄨㄟˊ ㄐㄧㄚ ㄑㄧㄢˊ，ㄊㄨㄥ ㄔㄤˊ ㄒㄧㄢ ㄗㄨㄛˋ ㄋㄚˇ ㄐㄧㄢˋ ㄕˋ？", ["收好書包準備回家", "先上床睡覺", "先吃明天的早餐"], ["ㄕㄡ ㄏㄠˇ ㄕㄨ ㄅㄠ ㄓㄨㄣˇ ㄅㄟˋ ㄏㄨㄟˊ ㄐㄧㄚ", "ㄒㄧㄢ ㄕㄤˋ ㄔㄨㄤˊ ㄕㄨㄟˋ ㄐㄧㄠˋ", "ㄒㄧㄢ ㄔ ㄇㄧㄥˊ ㄊㄧㄢ ㄉㄜ˙ ㄗㄠˇ ㄘㄢ"], "收好書包準備回家", "放學後收好用品，再準備回家。", "ㄈㄤˋ ㄒㄩㄝˊ ㄏㄡˋ ㄕㄡ ㄏㄠˇ ㄩㄥˋ ㄆㄧㄣˇ，ㄗㄞˋ ㄓㄨㄣˇ ㄅㄟˋ ㄏㄨㄟˊ ㄐㄧㄚ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著6，短針在8和9中間，是幾點半？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄌㄧㄡˋ，ㄉㄨㄢˇ ㄓㄣ ㄗㄞˋ ㄅㄚ ㄏㄜˊ ㄐㄧㄡˇ ㄓㄨㄥ ㄐㄧㄢ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ ㄅㄢˋ？", ["8點半", "9點半", "6點半"], ["ㄅㄚ ㄉㄧㄢˇ ㄅㄢˋ", "ㄐㄧㄡˇ ㄉㄧㄢˇ ㄅㄢˋ", "ㄌㄧㄡˋ ㄉㄧㄢˇ ㄅㄢˋ"], "8點半", "短針走過8、還沒到9，是8點半。", "ㄉㄨㄢˇ ㄓㄣ ㄗㄡˇ ㄍㄨㄛˋ ㄅㄚ、ㄏㄞˊ ㄇㄟˊ ㄉㄠˋ ㄐㄧㄡˇ，ㄕˋ ㄅㄚ ㄉㄧㄢˇ ㄅㄢˋ。"),
        curriculumQuestion(curriculumCategories.time, "早上8點和早上9點，哪一個時間比較晚？", "ㄗㄠˇ ㄕㄤˋ ㄅㄚ ㄉㄧㄢˇ ㄏㄜˊ ㄗㄠˇ ㄕㄤˋ ㄐㄧㄡˇ ㄉㄧㄢˇ，ㄋㄚˇ ㄧˊ ㄍㄜ˙ ㄕˊ ㄐㄧㄢ ㄅㄧˇ ㄐㄧㄠˋ ㄨㄢˇ？", ["早上8點", "早上9點", "一樣晚"], ["ㄗㄠˇ ㄕㄤˋ ㄅㄚ ㄉㄧㄢˇ", "ㄗㄠˇ ㄕㄤˋ ㄐㄧㄡˇ ㄉㄧㄢˇ", "ㄧˊ ㄧㄤˋ ㄨㄢˇ"], "早上9點", "9點在8點後面，所以9點比較晚。", "ㄐㄧㄡˇ ㄉㄧㄢˇ ㄗㄞˋ ㄅㄚ ㄉㄧㄢˇ ㄏㄡˋ ㄇㄧㄢˋ，ㄙㄨㄛˇ ㄧˇ ㄐㄧㄡˇ ㄉㄧㄢˇ ㄅㄧˇ ㄐㄧㄠˋ ㄨㄢˇ。"),
        curriculumQuestion(curriculumCategories.time, "小華先刷牙，再穿鞋，最後出門。哪件事最先做？", "ㄒㄧㄠˇ ㄏㄨㄚˊ ㄒㄧㄢ ㄕㄨㄚ ㄧㄚˊ，ㄗㄞˋ ㄔㄨㄢ ㄒㄧㄝˊ，ㄗㄨㄟˋ ㄏㄡˋ ㄔㄨ ㄇㄣˊ。ㄋㄚˇ ㄐㄧㄢˋ ㄕˋ ㄗㄨㄟˋ ㄒㄧㄢ ㄗㄨㄛˋ？", ["刷牙", "穿鞋", "出門"], ["ㄕㄨㄚ ㄧㄚˊ", "ㄔㄨㄢ ㄒㄧㄝˊ", "ㄔㄨ ㄇㄣˊ"], "刷牙", "句子先說刷牙，所以刷牙最先做。", "ㄐㄩˋ ㄗ˙ ㄒㄧㄢ ㄕㄨㄛ ㄕㄨㄚ ㄧㄚˊ，ㄙㄨㄛˇ ㄧˇ ㄕㄨㄚ ㄧㄚˊ ㄗㄨㄟˋ ㄒㄧㄢ ㄗㄨㄛˋ。"),
        curriculumQuestion(curriculumCategories.time, "長針指著12，短針指著10，是幾點？", "ㄔㄤˊ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ ㄦˋ，ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ，ㄕˋ ㄐㄧˇ ㄉㄧㄢˇ？", ["10點", "12點", "6點"], ["ㄕˊ ㄉㄧㄢˇ", "ㄕˊ ㄦˋ ㄉㄧㄢˇ", "ㄌㄧㄡˋ ㄉㄧㄢˇ"], "10點", "整點時短針指著10，就是10點。", "ㄓㄥˇ ㄉㄧㄢˇ ㄕˊ ㄉㄨㄢˇ ㄓㄣ ㄓˇ ㄓㄜ˙ ㄕˊ，ㄐㄧㄡˋ ㄕˋ ㄕˊ ㄉㄧㄢˇ。")
      ])
  ];

  const tabs = Array.from(document.querySelectorAll(".subject-tab"));
  const panel = document.getElementById("subject-panel");
  const readyState = document.getElementById("ready-state");
  const lessonState = document.getElementById("lesson-state");
  const questionState = document.getElementById("question-state");
  const resultState = document.getElementById("result-state");
  const subjectName = document.getElementById("subject-name");
  const subjectNameZhuyin = document.getElementById("subject-name-zhuyin");
  const subjectDescription = document.getElementById("subject-description");
  const subjectDescriptionZhuyin = document.getElementById("subject-description-zhuyin");
  const lessonList = document.getElementById("lesson-list");
  const courseProgressLabel = document.getElementById("course-progress");
  const progressNotice = document.getElementById("progress-notice");
  const roundNote = document.getElementById("round-note");
  const roundNoteZhuyin = document.getElementById("round-note-zhuyin");
  const answerList = document.getElementById("answer-list");
  const answerFeedback = document.getElementById("answer-feedback");
  const nextButton = document.getElementById("next-button");
  const missedBox = document.getElementById("missed-box");
  const missedList = document.getElementById("missed-list");
  const progressTrack = document.getElementById("progress-track");
  const progressFill = document.getElementById("progress-fill");
  const questionText = document.getElementById("question-text");
  const readQuestionButton = document.getElementById("read-question-button");
  const speechStatus = document.getElementById("speech-status");
  const retryButton = document.getElementById("retry-button");
  const courseReturnButton = document.getElementById("course-return-button");
  let selectedLessonIndex = 0;
  let selectedSubject = "chinese";
  let round = [];
  let questionIndex = 0;
  let correctCount = 0;
  let missedCategories = [];
  let answered = false;
  let totalStars = 0;
  let activeSpeechUtterance = null;
  const speechSupported = "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  const femaleTaiwanVoiceName = /hsiao[\s-]?(chen|yu|mei)|ting[\s-]?ting|mei[\s-]?jia|meijia|yating|hanhan|female|女/iu;

  function createEmptyProgress() {
    return Object.fromEntries(
      Object.entries(courseData).map(([subject, lessons]) => [subject, lessons.map(() => false)])
    );
  }

  const progressStorageKey = "elementary-course-progress-v2";
  let courseProgress = createEmptyProgress();
  try {
    const storedProgress = localStorage.getItem(progressStorageKey);
    const legacyStoredProgress = storedProgress ? null : localStorage.getItem("elementary-course-progress-v1");
    const shouldPreserveEnglishProgress = !storedProgress && Boolean(legacyStoredProgress);
    const progressToLoad = storedProgress || legacyStoredProgress;
    if (progressToLoad) {
      const parsedProgress = JSON.parse(progressToLoad);
      if (!parsedProgress || typeof parsedProgress !== "object") throw new Error("進度資料格式錯誤");
      courseProgress = Object.fromEntries(
        Object.entries(courseData).map(([subject, lessons]) => [
          subject,
          lessons.map((_, index) => shouldPreserveEnglishProgress
            ? subject === "english" && parsedProgress.english?.[index] === true
            : parsedProgress[subject]?.[index] === true)
        ])
      );
    }
  } catch (error) {
    console.error("讀取課程進度失敗：", error);
    progressNotice.textContent = "目前無法讀取已儲存的進度；本次仍可正常練習。";
  }

  function saveProgress() {
    try {
      localStorage.setItem(progressStorageKey, JSON.stringify(courseProgress));
      progressNotice.textContent = "學習進度已保存在這台裝置。";
    } catch (error) {
      console.error("儲存課程進度失敗：", error);
      progressNotice.textContent = "無法儲存進度；請確認瀏覽器允許儲存網站資料。";
    }
  }

  function renderCourseList() {
    const lessons = courseData[selectedSubject];
    const completedCount = courseProgress[selectedSubject].filter(Boolean).length;
    courseProgressLabel.textContent = `已完成 ${completedCount} / ${lessons.length} 課`;
    tabs.forEach((tab) => {
      const subject = tab.dataset.subject;
      const progress = document.getElementById(`subject-progress-${subject}`);
      const subjectLessons = courseData[subject];
      const subjectCompletedCount = courseProgress[subject].filter(Boolean).length;
      progress.textContent = `已完成 ${subjectCompletedCount} / ${subjectLessons.length} 課`;
    });
    lessonList.replaceChildren();

    lessons.forEach((lesson, index) => {
      const completed = courseProgress[selectedSubject][index];
      const locked = index > 0 && !courseProgress[selectedSubject][index - 1];
      const button = document.createElement("button");
      button.type = "button";
      button.className = "lesson-card";
      button.classList.toggle("is-complete", completed);
      button.classList.toggle("is-locked", locked);
      button.disabled = locked;
      button.setAttribute("aria-label", `第 ${index + 1} 課：${lesson.title}${locked ? "，尚未解鎖" : ""}`);

      const number = document.createElement("span");
      number.className = "lesson-card__number";
      number.textContent = `第 ${index + 1} 課`;
      const title = document.createElement("span");
      title.className = "lesson-card__title";
      renderAnnotatedText(title, lesson.title, lesson.titleZhuyin);
      const status = document.createElement("span");
      status.className = "lesson-card__status";
      status.textContent = completed ? "已完成 ✓" : locked ? "完成前一課後解鎖" : "開始學習 →";
      button.append(number, title, status);
      button.addEventListener("click", () => openLesson(index));
      lessonList.append(button);
    });
  }

  function showReady() {
    stopQuestionSpeech();
    readyState.hidden = false;
    lessonState.hidden = true;
    questionState.hidden = true;
    resultState.hidden = true;
    panel.setAttribute("aria-labelledby", `tab-${selectedSubject}`);
    renderAnnotatedText(subjectName, subjects[selectedSubject].name, subjects[selectedSubject].nameZhuyin);
    renderAnnotatedText(subjectDescription, subjects[selectedSubject].description, subjects[selectedSubject].descriptionZhuyin);
    subjectNameZhuyin.hidden = true;
    subjectDescriptionZhuyin.hidden = true;
    roundNote.textContent = selectedSubject === "math"
      ? "先看小課堂，再做 10 題小測；答對 7 題就能解鎖下一課。"
      : "先看小課堂，再做 3 題小測；答對 2 題就能解鎖下一課。";
    roundNoteZhuyin.textContent = selectedSubject === "math"
      ? "ㄒㄧㄢ ㄎㄢˋ ㄒㄧㄠˇ ㄎㄜˋ ㄊㄤˊ，ㄗㄞˋ ㄗㄨㄛˋ ㄕˊ ㄊㄧˊ ㄒㄧㄠˇ ㄘㄜˋ；ㄉㄚˊ ㄉㄨㄟˋ ㄑㄧ ㄊㄧˊ ㄐㄧㄡˋ ㄋㄥˊ ㄐㄧㄝˇ ㄙㄨㄛˇ ㄒㄧㄚˋ ㄧˋ ㄎㄜˋ。"
      : "ㄒㄧㄢ ㄎㄢˋ ㄒㄧㄠˇ ㄎㄜˋ ㄊㄤˊ，ㄗㄞˋ ㄗㄨㄛˋ ㄙㄢ ㄊㄧˊ ㄒㄧㄠˇ ㄘㄜˋ；ㄉㄚˊ ㄉㄨㄟˋ ㄦˋ ㄊㄧˊ ㄐㄧㄡˋ ㄋㄥˊ ㄐㄧㄝˇ ㄙㄨㄛˇ ㄒㄧㄚˋ ㄧˋ ㄎㄜˋ。";
    renderCourseList();
  }

  function chooseSubject(subject, moveFocus) {
    selectedSubject = subject;
    tabs.forEach((tab) => {
      const active = tab.dataset.subject === subject;
      tab.setAttribute("aria-selected", String(active));
      tab.tabIndex = active ? 0 : -1;
    });
    showReady();
    if (moveFocus) document.getElementById(`tab-${subject}`).focus();
  }

  function shuffleQuestions(source, count) {
    const questions = source.slice();
    for (let index = questions.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [questions[index], questions[randomIndex]] = [questions[randomIndex], questions[index]];
    }
    return questions.slice(0, count);
  }

  function openLesson(index) {
    selectedLessonIndex = index;
    const lesson = courseData[selectedSubject][index];
    readyState.hidden = true;
    lessonState.hidden = false;
    questionState.hidden = true;
    resultState.hidden = true;
    renderAnnotatedText(document.getElementById("lesson-kicker"), `第${index + 1}課・小課堂`, `ㄉㄧˋ ${index + 1} ㄎㄜˋ ㄒㄧㄠˇ ㄎㄜˋ ㄊㄤˊ`);
    renderAnnotatedText(document.getElementById("lesson-title"), lesson.title, lesson.titleZhuyin);
    renderAnnotatedText(document.getElementById("lesson-teaching"), lesson.teaching, lesson.teachingZhuyin);
    renderAnnotatedText(document.getElementById("lesson-example"), lesson.example, lesson.exampleZhuyin);
    document.getElementById("start-lesson-button").focus();
  }

  function startLessonQuiz() {
    const questionCount = selectedSubject === "math" ? 10 : 3;
    round = shuffleQuestions(courseData[selectedSubject][selectedLessonIndex].questions, questionCount);
    questionIndex = 0;
    correctCount = 0;
    missedCategories = [];
    lessonState.hidden = true;
    readyState.hidden = true;
    resultState.hidden = true;
    questionState.hidden = false;
    renderQuestion();
  }

  function renderAnnotatedText(element, text, reading) {
    const syllables = reading.match(/[ㄅ-ㄩ˙ˊˇˋ]+/g) || [];
    let syllableIndex = 0;
    const fragment = document.createDocumentFragment();
    const characters = Array.from(text);

    for (let index = 0; index < characters.length; index += 1) {
      const character = characters[index];
      let readingCount = 0;
      if (/[\u3400-\u9fff]/u.test(character)) {
        readingCount = 1;
      } else if (/\d/u.test(character)) {
        let end = index + 1;
        while (end < characters.length && /\d/u.test(characters[end])) end += 1;
        const number = Number(characters.slice(index, end).join(""));
        readingCount = number >= 11 && number <= 19 ? 2 : number > 19 && number % 10 !== 0 ? 3 : number >= 20 ? 2 : 1;
        const numberCharacters = characters.slice(index, end);
        const annotation = syllables.slice(syllableIndex, syllableIndex + readingCount);
        syllableIndex += annotation.length;
        const numberNode = createAnnotatedCharacter(numberCharacters.join(""), annotation);
        fragment.append(numberNode);
        index = end - 1;
        continue;
      }

      if (!readingCount) {
        fragment.append(document.createTextNode(character));
        continue;
      }
      const annotation = syllables[syllableIndex] ? [syllables[syllableIndex]] : [];
      syllableIndex += annotation.length;
      fragment.append(createAnnotatedCharacter(character, annotation));
    }

    element.replaceChildren(fragment);
  }

  function createAnnotatedCharacter(character, reading) {
    if (!reading.length) return document.createTextNode(character);
    const wrapper = document.createElement("span");
    wrapper.className = "annotated-char";
    const text = document.createElement("span");
    text.className = "annotated-char__text";
    text.textContent = character;
    const phonetic = document.createElement("span");
    phonetic.className = "annotated-char__reading";
    phonetic.textContent = reading.join("");
    wrapper.append(text, phonetic);
    return wrapper;
  }

  function renderQuestion() {
    stopQuestionSpeech();
    const question = round[questionIndex];
    answered = false;
    document.getElementById("round-label").textContent = `${questionIndex + 1} / ${round.length}`;
    const categoryLabel = document.getElementById("category-label");
    renderAnnotatedText(categoryLabel, question.category, question.categoryZhuyin);
    renderAnnotatedText(questionText, question.prompt, question.promptZhuyin);
    progressTrack.setAttribute("aria-valuemax", String(round.length));
    progressTrack.setAttribute("aria-valuenow", String(questionIndex));
    progressFill.style.width = `${(questionIndex / round.length) * 100}%`;
    answerFeedback.replaceChildren();
    answerFeedback.className = "answer-feedback";
    nextButton.hidden = true;
    answerList.replaceChildren();
    question.options.forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "answer-option";
      button.dataset.answer = option;
      renderAnnotatedText(button, option, question.optionZhuyin[optionIndex]);
      button.addEventListener("click", () => selectAnswer(button, option, question));
      answerList.append(button);
    });
  }

  function isTaiwaneseChineseVoice(voice) {
    return /^zh[-_](?:tw|hant[-_]tw)(?:$|[-_])/iu.test(voice.lang);
  }

  function getTaiwaneseVoice(voices) {
    const taiwanVoices = voices.filter(isTaiwaneseChineseVoice);
    return taiwanVoices.find((voice) => femaleTaiwanVoiceName.test(voice.name))
      || taiwanVoices[0];
  }

  function stopQuestionSpeech() {
    activeSpeechUtterance = null;
    if (speechSupported) window.speechSynthesis.cancel();
    readQuestionButton.setAttribute("aria-pressed", "false");
    readQuestionButton.setAttribute("aria-label", "朗讀題目和選項");
    readQuestionButton.querySelector(".read-question-label").textContent = "朗讀題目";
  }

  function readQuestionAloud() {
    if (!speechSupported) {
      speechStatus.textContent = "這個瀏覽器不支援語音朗讀，請改用較新的瀏覽器。";
      return;
    }
    if (window.speechSynthesis.speaking) {
      stopQuestionSpeech();
      speechStatus.textContent = "已停止朗讀。";
      return;
    }

    const voices = window.speechSynthesis.getVoices();
    const voice = getTaiwaneseVoice(voices);
    if (!voice && voices.length > 0) {
      speechStatus.textContent = "這台裝置沒有可用的台灣中文語音。請在裝置語音設定安裝繁體中文（台灣）語音後再試；不會改用中國大陸語音。";
      return;
    }

    const question = round[questionIndex];
    const choices = question.options
      .map((option, index) => `選項${["一", "二", "三"][index]}：${option}`)
      .join("。");
    const utterance = new SpeechSynthesisUtterance(`${question.prompt}。${choices}。`);
    utterance.lang = "zh-TW";
    if (voice) utterance.voice = voice;
    utterance.rate = 0.85;
    utterance.pitch = 1.08;
    activeSpeechUtterance = utterance;
    utterance.onstart = () => {
      if (activeSpeechUtterance !== utterance) return;
      readQuestionButton.setAttribute("aria-pressed", "true");
      readQuestionButton.setAttribute("aria-label", "停止朗讀");
      readQuestionButton.querySelector(".read-question-label").textContent = "停止朗讀";
      speechStatus.textContent = "正在朗讀題目和選項。";
    };
    utterance.onend = () => {
      if (activeSpeechUtterance !== utterance) return;
      stopQuestionSpeech();
      speechStatus.textContent = "題目朗讀完畢。";
    };
    utterance.onerror = () => {
      if (activeSpeechUtterance !== utterance) return;
      stopQuestionSpeech();
      speechStatus.textContent = "朗讀時發生問題，請確認裝置的語音服務正常。";
    };
    window.speechSynthesis.cancel();
    window.speechSynthesis.resume();
    window.speechSynthesis.speak(utterance);
  }

  function selectAnswer(button, answer, question) {
    if (answered) return;
    answered = true;
    const isCorrect = answer === question.answer;
    answerList.querySelectorAll("button").forEach((optionButton) => {
      optionButton.disabled = true;
      if (optionButton.dataset.answer === question.answer) optionButton.classList.add("is-correct");
    });
    if (isCorrect) {
      correctCount += 1;
      totalStars += 1;
      document.getElementById("star-total").textContent = String(totalStars);
    } else {
      button.classList.add("is-wrong");
      missedCategories.push({ category: question.category, zhuyin: question.categoryZhuyin });
      answerFeedback.classList.add("is-wrong");
    }
    renderFeedback(isCorrect, question);
    progressTrack.setAttribute("aria-valuenow", String(questionIndex + 1));
    progressFill.style.width = `${((questionIndex + 1) / round.length) * 100}%`;
    const finalQuestion = questionIndex === round.length - 1;
    document.getElementById("next-label").textContent = finalQuestion ? "看結果" : "下一題";
    document.getElementById("next-zhuyin").textContent = finalQuestion ? "ㄎㄢˋ ㄐㄧㄝˊ ㄍㄨㄛˇ" : "ㄒㄧㄚˋ ㄧˊ ㄊㄧˊ";
    nextButton.hidden = false;
    nextButton.focus();
  }

  function showResult() {
    questionState.hidden = true;
    resultState.hidden = false;
    document.getElementById("result-score").textContent = `${correctCount} / ${round.length} ⭐`;
    const passed = correctCount >= Math.ceil(round.length * 2 / 3);
    if (passed) {
      courseProgress[selectedSubject][selectedLessonIndex] = true;
      saveProgress();
    }
    const title = passed ? "本課通過！" : "再練習一次吧！";
    const titleZhuyin = passed
      ? "ㄅㄣˇ ㄎㄜˋ ㄊㄨㄥ ㄍㄨㄛˋ"
      : "ㄗㄞˋ ㄌㄧㄢˋ ㄒㄧˊ ㄧˊ ㄘˋ ㄅㄚ";
    const message = passed
      ? "太棒了！已記住這一課，可以回課程列表繼續下一課。"
      : `答對 ${Math.ceil(round.length * 2 / 3)} 題就能通過本課，回去複習後再試一次。`;
    const messageZhuyin = passed
      ? "ㄊㄞˋ ㄅㄤˋ ㄌㄜ˙！ㄧˇ ㄐㄧˋ ㄓㄨˋ ㄓㄜˋ ㄧˋ ㄎㄜˋ，ㄎㄜˇ ㄧˇ ㄏㄨㄟˊ ㄎㄜˋ ㄔㄥˊ ㄌㄧㄝˋ ㄅㄧㄠˇ ㄐㄧˋ ㄒㄩˋ ㄒㄧㄚˋ ㄧˋ ㄎㄜˋ。"
      : selectedSubject === "math"
        ? "ㄉㄚˊ ㄉㄨㄟˋ ㄑㄧ ㄊㄧˊ ㄐㄧㄡˋ ㄋㄥˊ ㄊㄨㄥ ㄍㄨㄛˋ ㄅㄣˇ ㄎㄜˋ，ㄏㄨㄟˊ ㄑㄩˋ ㄈㄨˋ ㄒㄧˊ ㄏㄡˋ ㄗㄞˋ ㄕˋ ㄧˊ ㄘˋ。"
        : "ㄉㄚˊ ㄉㄨㄟˋ ㄦˋ ㄊㄧˊ ㄐㄧㄡˋ ㄋㄥˊ ㄊㄨㄥ ㄍㄨㄛˋ ㄅㄣˇ ㄎㄜˋ，ㄏㄨㄟˊ ㄑㄩˋ ㄈㄨˋ ㄒㄧˊ ㄏㄡˋ ㄗㄞˋ ㄕˋ ㄧˊ ㄘˋ。";
    renderAnnotatedText(
      document.getElementById("result-message"),
      message,
      messageZhuyin
    );
    missedList.replaceChildren();
    const counts = missedCategories.reduce((totals, item) => {
      totals[item.category] = totals[item.category] || { count: 0, zhuyin: item.zhuyin };
      totals[item.category].count += 1;
      return totals;
    }, {});
    Object.entries(counts).forEach(([category, data]) => {
      const item = document.createElement("li");
      const label = document.createElement("span");
      renderAnnotatedText(label, `${category}${data.count > 1 ? `（${data.count} 題）` : ""}`, data.zhuyin);
      item.append(label);
      missedList.append(item);
    });
    missedBox.hidden = missedCategories.length === 0;
    const resultTitle = document.getElementById("result-title");
    renderAnnotatedText(resultTitle, title, titleZhuyin);
    retryButton.querySelector("span").textContent = "再做一次小測";
    retryButton.querySelector(".zhuyin").textContent = "ㄗㄞˋ ㄗㄨㄛˋ ㄧˊ ㄘˋ ㄒㄧㄠˇ ㄘㄜˋ";
    document.getElementById("result-title-zhuyin").hidden = true;
    document.getElementById("result-message-zhuyin").hidden = true;
    courseReturnButton.hidden = false;
    retryButton.focus();
  }

  function renderFeedback(isCorrect, question) {
    const status = document.createElement("span");
    renderAnnotatedText(
      status,
      isCorrect ? "答對了！" : "再記一次：",
      isCorrect ? "ㄉㄚˊ ㄉㄨㄟˋ ㄌㄜ˙" : "ㄗㄞˋ ㄐㄧˋ ㄧˊ ㄘˋ"
    );
    const explanation = document.createElement("span");
    renderAnnotatedText(explanation, question.explain, question.explainZhuyin);
    answerFeedback.replaceChildren(status, explanation);
  }

  if (!speechSupported) readQuestionButton.disabled = true;
  if (speechSupported) {
    window.speechSynthesis.addEventListener("voiceschanged", () => {
      if (activeSpeechUtterance) return;
      const voices = window.speechSynthesis.getVoices();
      speechStatus.textContent = getTaiwaneseVoice(voices)
        ? "已找到繁體中文（台灣）語音；會優先選用女性聲音。"
        : voices.length
          ? "目前找不到台灣中文語音；不會改用其他地區語音。"
          : "語音清單尚未載入；點擊朗讀時會以繁體中文（台灣）語系嘗試播放。";
    });
  }
  readQuestionButton.addEventListener("click", readQuestionAloud);

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => chooseSubject(tab.dataset.subject, false));
    tab.addEventListener("keydown", (event) => {
      let nextIndex = index;
      if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
      else if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === "Home") nextIndex = 0;
      else if (event.key === "End") nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      chooseSubject(tabs[nextIndex].dataset.subject, true);
    });
  });

  document.getElementById("lesson-back-button").addEventListener("click", showReady);
  document.getElementById("start-lesson-button").addEventListener("click", startLessonQuiz);
  nextButton.addEventListener("click", () => {
    questionIndex += 1;
    if (questionIndex >= round.length) showResult();
    else renderQuestion();
  });
  retryButton.addEventListener("click", () => {
    startLessonQuiz();
  });
  courseReturnButton.addEventListener("click", showReady);
  showReady();
})();
