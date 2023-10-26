function DisplayComponent({ title, users, groups }) {
  return (
    <section className="component">
      <h2 className="component__header">{title}</h2>

      <article className="content">
        <ul className="content__list">
          {arrayOfContent.map((content) => {
            return (
              <li className="content__item">
                <div className="content__image"></div>
                <div className="content__description">
                  <div className="content__description-wrapper">
                    <h3 className="content__title"></h3>
                    <div className=""></div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </article>
    </section>
  );
}

export default DisplayComponent;
