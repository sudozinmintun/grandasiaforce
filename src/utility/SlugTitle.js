function SlugTitle({ slug }) {
  const title = slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) 
    .join(" ");

  return <span>{title}</span>; 
}

export default SlugTitle;
