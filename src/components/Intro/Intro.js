import './Intro.css';

function Intro() {
  return (
    <div className='intro'>
      <div className='intro-left'>
        <div className='intro-left-wrapper'>
          <h2 className='i-intro'>Hello, My name is</h2>
          <h1 className='i-name'>Wildan Shobara</h1>
          <div className='intro-title'>
            <div className='i-title-wrapper'>
              <div className='i-title-item'>React Developer</div>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Photographer</div>
              <div className='i-title-item'>Web Developer</div>
              <div className='i-title-item'>Photographer</div>
            </div>
          </div>
          <div className='i-desc'>Serve the project with creativity and high quality.</div>
        </div>
      </div>
      <div className='intro-right'>right</div>
    </div>
  );
}

export default Intro;
