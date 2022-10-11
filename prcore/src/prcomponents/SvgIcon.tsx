import * as React from 'react';
import Svg, {
  Defs,
  Path,
  G,
  ClipPath,
} from 'react-native-svg';
import { View } from 'react-native';
// svg creation

const Edit = ({ primaryColor, size }: any) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
    >
      <Path fill={'none'} d="M0 0h24v24H0z" />
      <Path
        data-name="Path 195808"
        d="m261.616 62.7-2.716-2.713a1.31 1.31 0 0 0-1.849 0l-2.491 2.491-.032.03-.03.032-8.679 8.679a1.358 1.358 0 0 0-.384.78l-.426 3.258a1.1 1.1 0 0 0-.01.152 1.194 1.194 0 0 0 1.348 1.186l3.258-.427a1.348 1.348 0 0 0 .779-.383l8.7-8.7.007-.007.006-.006 2.515-2.516a1.307 1.307 0 0 0 .004-1.856zm-12.331 11.836-2.551.334.333-2.551 8.048-8.048 2.218 2.217zm9.223-9.223L256.29 63.1l1.685-1.685 2.218 2.217z"
        transform="translate(-241.499 -56.105)"
        fill={primaryColor || '#0a68cc'}
      />
    </Svg>
  );
};
const Close = ({ primaryColor, size }: any) => {
  return (
    <Svg
      // xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 18 18"
    >
      <Path data-name="Path 102950" d="M0 0h18v18H0z" fill={'none'} />
      <Path
        data-name="Path 102951"
        d="M14.293 5.616a.686.686 0 0 0-.972 0l-3.37 3.363-3.37-3.37a.687.687 0 0 0-.972.972l3.37 3.37-3.37 3.37a.687.687 0 0 0 .972.972l3.37-3.37 3.37 3.37a.687.687 0 0 0 .972-.972l-3.37-3.37 3.37-3.37a.691.691 0 0 0 0-.965z"
        transform="translate(-1 -.902)"
        fill={primaryColor || '#0a68cc'}
      />
    </Svg>
  );
};

const AddIcon = ({ primaryColor, size }: any) => {
  return (
    <Svg width={size} height={size}>
      <Path data-name="Path 102954" d="M0 0h24v24H0z" fill={'none'} />

      <Path
        data-name="Path 102955"
        d="M18 13h-5v5a1 1 0 0 1-2 0v-5H6a1 1 0 0 1 0-2h5V6a1 1 0 0 1 2 0v5h5a1 1 0 0 1 0 2z"
        fill={primaryColor || '#2563c1'}
      />
    </Svg>
  );
};

const InfoIcon = ({ primaryColor, size }: any) => {
  return (
    <Svg
      id="Info_icon"
      data-name="Info icon"
      width={size}
      height={size}
      viewBox="0 0 16 16"
    >
      <Defs></Defs>
      <Path
        id="Touch_Target"
        data-name="Touch Target"
        fill={'none'}
        d="M0 0h16v16H0z"
      />
      <G
        id="Group_142969"
        data-name="Group 142969"
        transform="translate(-889.984 -1088.801)"
        fill={primaryColor || '#3d82cc'}
      >
        <Path
          id="Path_194831"
          data-name="Path 194831"
          d="M897.984 1103.746a6.945 6.945 0 1 1 6.945-6.945 6.953 6.953 0 0 1-6.945 6.945zm0-12.444a5.5 5.5 0 1 0 5.5 5.5 5.507 5.507 0 0 0-5.5-5.502z"
        />
        <Path
          id="Path_194832"
          data-name="Path 194832"
          d="M897.985 1094.62a.929.929 0 1 1 .658-.272.931.931 0 0 1-.658.272z"
        />
        <Path
          id="Path_194833"
          data-name="Path 194833"
          d="M897.985 1100.843a.723.723 0 0 1-.722-.723v-3.734a.722.722 0 0 1 1.444 0v3.734a.723.723 0 0 1-.722.723z"
        />
      </G>
    </Svg>
  );
};


const Delete = ({ primaryColor, size }: any) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Defs>
        <ClipPath id="a">
          <Path data-name="Rectangle 24096" fill="none" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
      <G
        data-name="Group 147949"
        clipPath="url(#a)"
        fill={primaryColor || '#0f68cc'}
      >
        <Path
          data-name="Path 198011"
          d="M6.339 7.127v11.685A1.8 1.8 0 0 0 8.126 20.6h7.748a1.8 1.8 0 0 0 1.787-1.787V7.127Zm9.686 11.836h-8.05v-10.2h8.05Z"
        />
        <Path
          data-name="Path 198012"
          d="M5.37 5.187a.818.818 0 0 1 .818-.818h2.485l.676-.676a1 1 0 0 1 .707-.293h3.887a1 1 0 0 1 .707.292l.677.677h2.484a.818.818 0 1 1 0 1.636H6.188a.818.818 0 0 1-.818-.818"
        />
      </G>
    </Svg>
  );
};

const closeRound = ({ primaryColor, size }: any) => {
  return (
    <Svg
      width={size || "48"}
      height={size || "48"}
      viewBox="0 0 48 48"
    >
      <G data-name="Group 147434" transform="translate(-12 -12)">
        <G data-name="Icon / close - circle" transform="translate(16 16)">
          <G fill="none" data-name="Path 197913">
            <Path
              d="M20 0A20 20 0 110 20 20 20 0 0120 0z"
              transform="translate(.381 .381)"
            ></Path>
            <Path
              fill={primaryColor || "#fff"}
              d="M20 2A17.882 17.882 0 007.272 7.272C3.872 10.672 2 15.192 2 20s1.872 9.328 5.272 12.728C10.672 36.128 15.192 38 20 38s9.328-1.872 12.728-5.272C36.128 29.328 38 24.808 38 20s-1.872-9.328-5.272-12.728C29.328 3.872 24.808 2 20 2m0-2c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0z"
              transform="translate(.381 .381)"
            ></Path>
          </G>
          <G data-name="Icon / Close">
            <Path fill="none" d="M0 0H39.915V39.915H0z"></Path>
            <G transform="translate(.381 .381)">
              <Path
                fill="none"
                d="M0 0h40v40H0z"
                data-name="Path 102950"
              ></Path>
              <Path
                fill={primaryColor || "#fff"}
                d="M21.02 5.774a1.206 1.206 0 00-1.707 0l-5.922 5.91-5.922-5.922a1.207 1.207 0 00-1.707 1.707l5.922 5.922-5.922 5.921a1.207 1.207 0 101.707 1.708l5.922-5.92 5.922 5.922a1.207 1.207 0 101.707-1.707l-5.92-5.924 5.92-5.922a1.214 1.214 0 000-1.695z"
                data-name="Path 102951"
                transform="translate(6.609 6.609)"
              ></Path>
            </G>
          </G>
        </G>
        <Path
          fill="none"
          d="M0 0H48V48H0z"
          data-name="Rectangle 23469"
          transform="translate(12 12)"
        ></Path>
      </G>
    </Svg>
  )
}

const SvgIcon = (props: any) => {
  const ImageName: any = {
 
    edit: Edit,
    close: Close,
    add_icon: AddIcon,
    info_icon: InfoIcon,
    delete: Delete,
    closeRound: closeRound,

  };

  const Icon = props.name ? ImageName[props.name || null] : null;

  return (
    <>
      {props?.svg ? (
        <View>{props?.svg}</View>
      ) : Icon ? (
        <Icon
          primaryColor={props?.primaryColor}
          SecondaryColor={props?.secondaryColor}
          size={props?.size || 24}
          opacity={props?.opacity}
        />
      ) : null}
    </>
  );
};
export default SvgIcon;
