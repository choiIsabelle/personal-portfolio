export const LinkedInIcon=(props)=>{
  const {height, width, dark} = props;
    return(
        <a class="navbar-brand" href="https://www.linkedin.com/in/isabelle-choi-19933221b/" title ="Linkedin"> 
        <svg width={width} height={height}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={dark ? "white" : "black"} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" >
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg></a>
    )
}