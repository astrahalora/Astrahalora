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
    highlighted: true,
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
const highlightedBtn = document.querySelector("#highlighted");
const displayAllBtn = document.querySelector("#all");
const selectElement = document.querySelector("select");
let projectsToDisplay = [];

const populateProjects = (list) => {
  list.forEach((project) => {
    projectsElement.insertAdjacentHTML(
      "beforeend",
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
};

const getSpecList = (list) => {
  const allSpecs = [];
  list.forEach((project) => {
    project.specs.forEach((spec) => {
      allSpecs.push(spec);
    });
  });
  return new Set([...allSpecs]);
};

const addAllSpecsToSelect = () => {
  const allSpecs = getSpecList(projectList);
  allSpecs.forEach((spec) => {
    selectElement.insertAdjacentHTML(
      "beforeend",
      `
        <option>${spec}</option>`
    );
  });
};

populateProjects(projectList);
addAllSpecsToSelect();

const removeAllChildren = () => {
  while (projectsElement.firstChild) {
    projectsElement.removeChild(projectsElement.firstChild);
  }
};

const filterHighlightedProjects = () => {
  projectsToDisplay = projectList.filter(
    (project) => project.highlighted === true
  );
};

highlightedBtn.addEventListener("click", function () {
  removeAllChildren();
  filterHighlightedProjects();
  populateProjects(projectsToDisplay);
});

displayAllBtn.addEventListener("click", function () {
  removeAllChildren();
  populateProjects(projectList);
});

const optionCollection = document.getElementsByTagName("option");
const optionList = Array.from(optionCollection);

selectElement.addEventListener("change", function () {
  removeAllChildren();
  const selectedOption = selectElement.value;
  if (selectedOption === "--Pick Language or Other--") {
    populateProjects(projectList);
  } else {
    projectsToDisplay = projectList.filter((project) =>
      project.specs.includes(selectedOption)
    );
    populateProjects(projectsToDisplay);
  }
});
