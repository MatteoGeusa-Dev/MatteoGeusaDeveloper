import "./link.css";

function Link({ text }){
    function jumpto(section) {
        var targetSection = document.getElementById(section);
        if (targetSection) {
          var targetPosition = targetSection.offsetTop - 120;
          window.scrollTo({ top: targetPosition, behavior: 'smooth' });
        }
      }
    return <li><a onClick={() => jumpto(`${text}`)}> { text } </a></li>;
}

export default Link;