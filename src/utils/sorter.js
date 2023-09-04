export const sortGroup = (array) => {
  let result = [];
  const recipients = array.slice();
  const length = array.length;
  for (let i = 0; i < length; i++) {
    let sender = array[i];
    let recipientIndex = Math.floor(Math.random() * recipients.length);
    while (recipients[recipientIndex] === sender) {
      recipientIndex = Math.floor(Math.random() * recipients.length);
    }
    let recipient = recipients.splice(recipientIndex, 1)[0];
    result.push({
      sender: sender,
      receiver: recipient,
    });
  }
  return result;
};
