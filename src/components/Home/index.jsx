import React, { useState, useEffect } from 'react'
import "./index.less"
export default function Home() {
  const [timer, setTimer] = useState(0);
  const [placeHolder, setPlaceholder] = useState('')
  const [categoryButtons, setCategoryButtons] = useState(0);
  const [socialTimer, setSocialTimer] = useState(0)

  let timerCount;
  let timerSocialCount;
  let string = "Your name here... "
  let socialMedia = ['/instagram.png', '/facebook.png', '/linkedin.png', '/twitter.png']
  let reachCustomers = ['recruiter', 'colleague', 'follower', ' new person you meet']

  useEffect(() => {
    return () => {
      clearTimeout(timerCount);
      clearTimeout(timerSocialCount)
    };
  }, [])

  useEffect(
    () => {
      if (timer !== 18) {
        timerCount = setTimeout(() => {
          setPlaceholder(placeHolder + string[timer])
          setTimer(timer + 1);
        }, 100);
      } else {
        setTimer(0)
        setPlaceholder('')
      }
    },
    [timer]
  );
  useEffect(
    () => {
      if (socialTimer <= 3) {
        timerSocialCount = setTimeout(() => {
          setSocialTimer(socialTimer + 1)
        }, 1000);
      } else {
        setSocialTimer(0)
      }
    },
    [socialTimer]
  );

  return (
    <div className="landing-home">
      <div className="landing-header">
        <div style={{ display: 'flex' }}>
          <img className="head-icon" src="/Icon.svg"></img>
          <p className="landing-headName">OnePlace</p>
        </div>
        <p className="landing-signup">Sign Up</p>
      </div>
      <div className="landing-part2">
        <div>
          <p className="landing-part2-head">Everything about you in <span style={{ color: '#4643d3' }}>OnePlace</span></p>
          <p className="landing-part2-sub"> Create your own Oneplace</p>
          <div className="landing-part2-inputDiv">
            <input placeholder={placeHolder} className="landing-part2-input"></input>
            <div className="landing-part2-seperator"></div>
            <div style={{ display: 'flex', paddingLeft: '6px' }}>
              <p className="landing-part2-inputWord">.oneplace.me</p>
              <img className="landing-part2-check" src="/check.png"></img>
            </div>
          </div>
          <p className="landing-part2-desc">Set up your exclusive <span style={{ color: '#4643d3' }}>personal webpage</span> in less than <span style={{ color: '#4643d3' }}>2 mins</span></p>
        </div>
        <img className="landing-part2-img" src="/landing1.png"></img>
      </div>
      <div className="landing-part3">
        <h1 className="landing-part-3-head">Use this one link as</h1>
        <img className="landing-socialIcons" src={socialMedia[socialTimer]}></img>
        <h1 className="landing-part-3-head"> bio link</h1>
      </div>
      <div className="landing-part3">
        <h1 className="landing-part-3-head landing-share-head">Share your webpage with a <span style={{ color: '#4643d3' }}>{reachCustomers[socialTimer]}</span></h1>
      </div>
      <div className="landing-part4">
        <button onClick={() => setCategoryButtons(0)} className={categoryButtons === 0 ? "landing-part4-button-active" : "landing-part4-button"}>Creator</button>
        <button onClick={() => setCategoryButtons(1)} className={categoryButtons === 1 ? "landing-part4-button-active" : "landing-part4-button"}>Dancer</button>
        <button onClick={() => setCategoryButtons(2)} className={categoryButtons === 2 ? "landing-part4-button-active" : "landing-part4-button"}>Singer</button>
        <button onClick={() => setCategoryButtons(3)} className={categoryButtons === 3 ? "landing-part4-button-active" : "landing-part4-button"}>Makeup Artist</button>
      </div>
      <div className="landing-part5">
        <div className="landing-part5-yellow"></div>
        <img className="landing-part5-img" src="/singer.png"></img>
      </div>
      <div className="landing-part6">
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }} className="landing-part2-inputDiv">
          <input placeholder={placeHolder} className="landing-part2-input"></input>
          <div className="landing-part2-seperator"></div>
          <div style={{ display: 'flex', paddingLeft: '8px' }}>
            <p className="landing-part2-inputWord">.oneplace.me</p>
            <img style={{ height: '30px', margin: 'auto', paddingRight: '10px', cursor: 'pointer', paddingLeft: '10px' }} src="/check.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}
