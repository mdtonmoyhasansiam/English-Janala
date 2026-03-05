// Level Container- Part 01
const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all") // Promise of Response
        .then((res) => res.json()) // Promise of JSON data
        .then((json) => displayLesson(json.data));
};

// Word Container- Part 01
const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLevelWord(data.data));
};

// Word Container- Part 02
const displayLevelWord = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML = "";

    // Word Container- Part 03 (Empty Message Set)
    if (words.length == 0){
        wordContainer.innerHTML =  `
        <div class="text-center col-span-full rounded-xl py-10 space-y-6 font-bangla">
            <img src="./assets/alert-error.png" alt="" class="mx-auto">
            <p class="text-xl font-medium text-gray-400">এই Lesson-এ এখনো কোন Vocabulary যুক্ত করা হয়নি-</p>
            <h2 class="font-bold text-4xl">পরবর্তী/অন্য Lesson-এ ক্লিক করুন।</h2>
        </div>`;
    }

    words.forEach((word) => {
        console.log(word);
        const card = document.createElement("div");
        card.innerHTML = `
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
            <p class="font-semibold">Meaning / Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation : "উচ্চারণ পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-circle-info"></i></button>
                <button class="btn bg-[#1A91FF10] hover:bg-[#1A91FF80]"><i class="fa-solid fa-volume-high"></i></button>

            </div>
        </div>`;

        wordContainer.append(card);
    });

};

// Level Container- Part 02
const displayLesson = (lessons) => {

    // 1. Get the container & empty
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML = "";

    // 2. Get into every lessons
    for (let lesson of lessons) {

        // 3. Create Element
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML = `
                         <button onclick= "loadLevelWord (${lesson.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open-reader"></i>
                            Lesson - ${lesson.level_no}</button>`;

        // 4. Append into container
        levelContainer.append(btnDiv);

    };


};

loadLessons();