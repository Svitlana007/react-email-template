
const Container = ({ children, width }) => {
  return (
    <Fragment>
      <style dangerouslySetInnerHTML={{__html: `
        @media only screen and (max-width: ${width - 1}px) {
          .container__inner {
            width: 100% !important;
            min-width: initial !important;
          }
        }
      `}} />
