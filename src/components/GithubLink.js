import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubLink() {
  return (
    <a
      href="https://github.com/darswright/asset-logue-test"
      className="github-link"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
  );
}
