import Logo from '../../public/logo.svg';

import './Header.scss';

export default function Header(): JSX.Element {
  return (
    <header className="app__header">
      <div className="app__header__left">
        <div className="app__header__left__logo">
          <a href="https://duck.com/" target="_blank" rel="noreferrer">
            <img src={Logo} alt="Duck duck go" />
          </a>
        </div>
        <h1 className="app__header__left__title">Cool Header</h1>
      </div>
      <div className="app__header__right">&nbsp;</div>
    </header>
  );
}
