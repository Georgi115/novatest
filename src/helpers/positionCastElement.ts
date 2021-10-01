export const positionCast = (widthScreen: number, position: number) => {
  switch (true) {
    case widthScreen > 1000:
      return 306;
    case widthScreen < 1000 && widthScreen > 450:
      return 280;
    case widthScreen < 450:
      return 240;
    default:
      return 0;
  }
};

export const positionProgressStripe = (
  widthScreen: number,
  maxPosition: number
) => {
  if (widthScreen > 1000) {
    return 1200 / maxPosition;
  } else if (widthScreen <= 1000 && widthScreen > 450) {
    return 640 / maxPosition;
  } else if (widthScreen < 450) {
    return 328 / maxPosition;
  }
  return 0;
};
