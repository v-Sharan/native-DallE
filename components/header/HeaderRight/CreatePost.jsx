import { TouchableOpacity, Text } from "react-native";
import styles from "./CreatePost.style";

const CreatePost = ({ handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.text}>Create</Text>
    </TouchableOpacity>
  );
};

export default CreatePost;
