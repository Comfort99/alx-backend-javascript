export default function guardrail(mathFunction) {
  const queue = [];

  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push(error.message);
  } finally {
    queue.push('Guarrdrail was processed');
  }
  return queue;
}
