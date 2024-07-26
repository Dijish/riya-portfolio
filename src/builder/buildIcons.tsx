export const buildIcon = (type: string) => {
  switch (type) {
    case "facebook":
      return <span className="icon-facebook"></span>;
    case "facebook-2":
      return <span className="icon-facebook2"></span>;
    case "linkedin":
      return <span className="icon-linkedin"></span>;
  }
};
