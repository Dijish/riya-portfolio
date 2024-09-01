export const buildIcon = (type: string) => {
  switch (type) {
    case "facebook":
      return <span className="icon-facebook"></span>;
    case "facebook-2":
      return <span className="icon-facebook2"></span>;
    case "linkedin":
      return <span className="icon-linkedin"></span>;
    case "hamburger":
      return <span className="icon-menu"></span>;
    case "close":
      return <span className="icon-cross"></span>;
    case "qa":
      return <span className="icon-justice"></span>;
    case "bilingual":
      return <span className="icon-language"></span>;
    case "PO":
      return <span className="icon-files-empty"></span>;
    case "go-up":
      return <span className="icon-chevrons-up"></span>;
  }
};
