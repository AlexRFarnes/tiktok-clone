import { ClearButton, SvgButton } from '../theme';

const ShareButton = ({ video, doLike }) => {
  return (
    <ClearButton>
      <SvgButton src='/share.svg'></SvgButton>
    </ClearButton>
  );
};

export default ShareButton;
