export const sortGroup = (array) => {
  let sortedGroup = [];
  const receivers = array.slice();

  for (let i = 0; i < array.length; i++) {
    let giver = array[i];
    let receiverIndex = Math.floor(Math.random() * receivers.length);
    while (receivers[receiverIndex] === giver) {
      receiverIndex = Math.floor(Math.random() * receivers.length);
    }
    let receiver = receivers.splice(receiverIndex, 1)[0];
    sortedGroup.push({
      sender: giver,
      receiver: receiver,
    });
  }
  return sortedGroup;
};
