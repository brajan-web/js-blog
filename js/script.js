const titleClickHandler = function(event){
  const clickedElement = this;
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */

  const activeLinks = document.querySelectorAll('.titles a.active');

  for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
  }

  /*  add class 'active' to the clicked link */

  event.preventDefault();

  console.log('clickedElement:', clickedElement);

  clickedElement.classList.add('active');

  /* get 'href' attribute from the clicked link */

  const articleSelector = clickedElement.getAttribute('href')
  
  console.log(articleSelector)

  /* find the correct article using the selector (value of 'href' attribute) */
  
  const targetArticle = article.querySelector('href')

  console.log(targetArticle)

  /* add class 'active' to the correct article */

 targetArticle.classList.add("active")

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}

const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';
  optArticleTagsSelector = '.post-tags .list'

function generateTitleLinks(){

   /* remove contents of titleList */

   const titleList = document.querySelector(optTitleListSelector);
   titleList.innerHTML = '';

   /* for each article */

   const articles = document.querySelectorAll(optArticleSelector);
   for (let article of articles) {
    console.log(article);

    /* get the article id */

    const articleId = articles.getAttribute('id')

    /* find the title element */

    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    /* create HTML of the link */
    
    titleList.insertAdjacentHTML('afterbegin', linkHTML); 
    
    
    /* insert link into titleList */
    html = html + linkHTML;
    console.log(html);
   }
   titleList.innerHTML = html;
 
 generateTitleLinks();
}  

function generateTags(){
  /* find all articles */
  
  const articles = document.querySelector(optTitleListSelector);

  /* START LOOP: for every article: */

   const articles = document.querySelectorAll(optArticleSelector);
   for (let article of articles) {
    console.log(article);
  
    /* find tags wrapper */

    /* make html variable with empty string */

    /* get tags from data-tags attribute */

    /* split tags into array */

    /* START LOOP: for each tag */

      /* generate HTML of the link */

      /* add generated code to html variable */

    /* END LOOP: for each tag */

    /* insert HTML of all the links into the tags wrapper */

  /* END LOOP: for every article: */
}

generateTags();