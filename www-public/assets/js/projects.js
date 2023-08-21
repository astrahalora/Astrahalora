const projectList = [
  {
    title: "Image Placeholder",
    description: "This project does this and this",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2023-06-20",
    highlighted: true,
    specs: ["React", "JavaScript", "SCSS", "Express", "MongoDB"],
  },
  {
    title: "Image Placeholder",
    description: "This project does this and this",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2022-06-20",
    highlighted: false,
    specs: ["Java", "Maven", "React", "CSS"],
  },
  {
    title: "Image Placeholder",
    description: "This project does this and this",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2022-06-22",
    highlighted: false,
    specs: ["JavaScript", "Angular"],
  },
  {
    title: "Image Placeholder",
    description: "This project does this and this",
    imgUrl: "/www-public/assets/images/placeholder2.jpg",
    preview: "somepage",
    code: "someurl",
    date: "2021-06-20",
    highlighted: false,
    specs: ["JavaScript", "Angular"],
  },
];

const projectsElement = document.querySelector(".projects");

projectList.forEach(project => {
  projectsElement.insertAdjacentHTML("beforeend",
    `<figure>
      <img src="${project.imgUrl}" alt="${project.title}">
      <figcaption>
        <h3>${project.title}</h3>
        <p class="descrip">${project.description}</p>
        <div class="deco">
          <p>${project.specs.join(", ")}</p>
          <a href="${project.preview}">Preview</a>
          <a href="${project.code}">Code</a>
        </div>
      </figcaption>
    </figure>`
  );
});


