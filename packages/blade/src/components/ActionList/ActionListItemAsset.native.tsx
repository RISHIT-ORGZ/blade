import { Image } from 'react-native';
import type { ImageSourcePropType } from 'react-native';
import { componentIds } from './componentIds';
import { size } from '~tokens/global';
import { assignWithoutSideEffects } from '~src/utils/assignWithoutSideEffects';

type ActionListItemAssetProps = {
  /**
   * Source of the image.
   *
   * Can either be a string URI or `require('/local/image')` in React Native
   */
  src: string | ImageSourcePropType;
  /**
   * Alt tag for the image
   */
  alt: string;
};
/**
 *
 */
const _ActionListItemAsset = (props: ActionListItemAssetProps): React.ReactElement => {
  const source = typeof props.src === 'string' ? { uri: props.src } : props.src;

  return (
    <Image
      source={source}
      style={{ width: size[16], height: size[12] }}
      accessibilityIgnoresInvertColors
      // @ts-expect-error: alt does exist on React Native Image https://reactnative.dev/docs/image#alt
      alt={props.alt}
    />
  );
};

const ActionListItemAsset = assignWithoutSideEffects(_ActionListItemAsset, {
  componentId: componentIds.ActionListItemAsset,
});

export { ActionListItemAsset, ActionListItemAssetProps };
