import React from "react"
import sunrise from "../images/dawn.svg"

const Sunrise = (props) => {
  // If the `onClick` prop exists, call it with 'dark'
  const handleClick = () => props.onClick && props.onClick('dark');

  return (
      // <img src={sunrise} alt="sunrise" className="sunrise theme-toggle" onClick={handleClick}/>
      <svg id="Capa_1" className="sunrise theme-toggle" onClick={handleClick} enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m241 114.954h30v111h-30z"/><path d="m411.613 397.952c-7.551-79.301-74.334-141.331-155.613-141.331s-148.062 62.03-155.613 141.332h-100.387v30h512v-30h-100.387z"/><path d="m63.667 457.952h384.667v30h-384.667z"/><path d="m33.794 300.29h30v69.001h-30z" transform="matrix(.353 -.936 .936 .353 -281.678 262.306)"/><path d="m155.591 174.112h30v69.001h-30z" transform="matrix(.923 -.386 .386 .923 -67.243 81.902)"/><path d="m306.908 193.612h69.001v30h-69.001z" transform="matrix(.386 -.923 .923 .386 17.296 443.196)"/><path d="m428.705 319.791h69.001v30h-69.001z" transform="matrix(.936 -.353 .353 .936 -88.342 184.993)"/><path d="m69.528 185.98h30v111h-30z" transform="matrix(.707 -.707 .707 .707 -145.995 130.498)"/><path d="m371.972 226.48h111v30h-111z" transform="matrix(.707 -.707 .707 .707 -45.548 372.997)"/><path d="m438.87 70.867v72.531h30v-72.531l20.382 20.382 21.213-21.213-45.988-45.988h-21.213l-46.305 46.303 21.213 21.213z"/></g></svg>
  )
}

export default Sunrise;