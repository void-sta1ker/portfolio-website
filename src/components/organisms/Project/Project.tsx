import * as React from "react";
import type { ProjectProps } from "@/types/project";
import { useSpring, useTrail, animated, config } from "@react-spring/web";
import useIntersectionObserver from "src/hooks/useIntersectionObserver";
import Image from "next/image";
import Wrapper from "@/components/atoms/Wrapper/Wrapper";
import TagCmp from "@/components/atoms/Tag/Tag";
import List from "@/components/atoms/List/List";
import ListItem from "@/components/atoms/ListItem/ListItem";
import clsx from "clsx";
import classes from "./Project.module.scss";

const AnimatedImage = animated(Image);
const AnimatedListItem = animated(ListItem);

export default function Project(props: ProjectProps) {
  const { name, title, description, tags, services, image, reverseOrder } =
    props;
  const initialXPosition = reverseOrder ? "-20%" : "20%";

  const textRef = React.useRef<HTMLDivElement | null>(null);
  const textEntry = useIntersectionObserver(textRef, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isTextVisible = !!textEntry?.isIntersecting;

  const serviceRef = React.useRef<HTMLDivElement | null>(null);
  const serviceEntry = useIntersectionObserver(serviceRef, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isServiceVisible = !!serviceEntry?.isIntersecting;

  const imageRef = React.useRef<HTMLDivElement | null>(null);
  const imageEntry = useIntersectionObserver(imageRef, {
    threshold: 0.5,
    freezeOnceVisible: true,
  });
  const isImgVisible = !!imageEntry?.isIntersecting;

  const [{ opacity: pOpacity, transform }, textSpringApi] = useSpring(() => ({
    transform: `translateX(${initialXPosition})`,
    opacity: 0,
    config: config.stiff,
  }));

  const [{ scale, opacity }, imgSpringApi] = useSpring(() => ({
    scale: 0,
    opacity: 0,
    config: config.stiff,
  }));

  const [trail, trailApi] = useTrail(services.length, () => ({
    transform: "translateY(100px)",
    opacity: 0,
    config: config.stiff,
  }));

  React.useEffect(() => {
    if (isTextVisible) {
      textSpringApi.start({
        transform: "translateX(0%)",
        opacity: 1,
      });
    }
    return () => {
      textSpringApi.stop();
    };
  }, [textSpringApi, isTextVisible]);

  React.useEffect(() => {
    if (isImgVisible) {
      imgSpringApi.start({
        scale: 1,
        opacity: 1,
      });
    }
    return () => {
      imgSpringApi.stop();
    };
  }, [isImgVisible, imgSpringApi]);

  React.useEffect(() => {
    if (isServiceVisible) {
      trailApi.start({
        transform: "translateY(0px)",
        opacity: 1,
      });
    }
    return () => {
      trailApi.stop();
    };
  }, [isServiceVisible, trailApi]);

  return (
    <Wrapper>
      <div
        className={clsx(
          classes.container,
          reverseOrder ? classes.reversedOrder : null
        )}
      >
        <div className={classes.picture} ref={imageRef}>
          <AnimatedImage
            src={image.src}
            alt={image.alt}
            width={400}
            height={400}
            // layout="fill"
            style={{ scale, opacity }}
            priority
          />
        </div>
        <div className={classes.project}>
          <h1 className={clsx(classes.project__title, classes[name])}>
            {title}
          </h1>
          {tags.map((tag) => (
            <TagCmp key={tag.text} color={tag.color}>
              <Image
                src={tag.image.src}
                alt={tag.image.alt}
                width={20}
                height={20}
              />
              <p>{tag.text}</p>
            </TagCmp>
          ))}
          <animated.p
            ref={textRef}
            className={classes.project__description}
            style={{ transform, opacity: pOpacity }}
          >
            {/* Goodzone here should be link or attr */}
            {description}
          </animated.p>
          <div className={classes.project__services} ref={serviceRef}>
            <h2>What I did?</h2>
            <List>
              {services.map((service, i) => (
                <AnimatedListItem
                  key={service.id}
                  className={classes.listItem}
                  style={trail[i]}
                >
                  <Image
                    src={service.image.src}
                    width={45}
                    height={45}
                    alt={serviceMap[service.type]}
                  />
                  {serviceMap[service.type]}
                </AnimatedListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const serviceMap = {
  admin: "Admin Panel",
  website: "Website",
  crm: "CRM System",
  pos: "POS System",
};
