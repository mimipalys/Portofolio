import React, { useState } from "react";
import "../DogBoneHeader.css";

export default function DogBoneHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setMenuOpen(!menuOpen);
  };

  const closeDropdown = (e) => {
    if (!e.target.closest(".container")) {
      setMenuOpen(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("click", closeDropdown);
    return () => window.removeEventListener("click", closeDropdown);
  }, []);

  const geeAlert = () => {
    alert("You're signed out");
  };

  return (
    <>
      <header>
        <div id="structure">
          <div className="bone">
            <div className="s1"></div>
            <div className="s2"></div>
            <div className="s3"></div>
            <div className="s4"></div>

            <div className="centerbone">
              <div className="clean">
                <div className="logo">
                  <a href="#">
                    <img
                      src="/images/logo-PAWS.png"
                      alt="logo"
                      style={{ width: "200px" }}
                    />
                  </a>
                </div>

                <div className="dropdown">
                  <div
                    className={`container ${menuOpen ? "change" : ""}`}
                    onClick={toggleDropdown}
                  >
                    <button className="menubtn">
                      <div className="bar1"></div>
                      <div className="bar2"></div>
                      <div className="bar3"></div>
                    </button>

                    <div
                      id="myDropdown"
                      className={`dropdown-content ${menuOpen ? "show" : ""}`}
                    >
                      <h2>DOG BONE HEADER</h2>
                      <hr />
                      <div className="vl"></div>

                      <div className="whitedogbone">
                        {/* Group 1 */}
                        <section>
                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Animals</a>
                              </div>
                            </div>
                          </button>

                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Adopt</a>
                              </div>
                            </div>
                          </button>
                        </section>

                        {/* Group 2 */}
                        <section>
                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">About Us</a>
                              </div>
                            </div>
                          </button>

                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Contact</a>
                              </div>
                            </div>
                          </button>
                        </section>

                        {/* Group 3 */}
                        <section>
                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Volunteer</a>
                              </div>
                            </div>
                          </button>

                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Donate</a>
                              </div>
                            </div>
                          </button>
                        </section>

                        {/* Group 4 */}
                        <section>
                          <button className="bone_btn">
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Adopt</a>
                              </div>
                            </div>
                          </button>

                          <button className="bone_btn" onClick={geeAlert}>
                            <div className="c1"></div>
                            <div className="c2"></div>
                            <div className="c3"></div>
                            <div className="c4"></div>
                            <div className="b1">
                              <div className="b2">
                                <a href="#">Sign Out</a>
                              </div>
                            </div>
                          </button>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div style={{ clear: "both" }}></div>
    </>
  );
}
