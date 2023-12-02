import Giscus from "@giscus/react";

export default function Comments() {
    return (
      <Giscus
        repo="GDSC-GSU/web"
        repoId="R_kgDOKmYROA"
        category="General"
        categoryId="DIC_kwDOKmYROM4CaiAa"
        mapping="title"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="1"
        inputPosition="top"
        theme="light_high_contrast"
        lang="en"
        loading="lazy"
        crossorigin="anonymous"
    />
    );
  }
