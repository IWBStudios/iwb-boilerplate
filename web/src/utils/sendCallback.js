/**
 * Sends a POST request to the specified NUI handle.
 * @param {string} handle - The NUI handle to call.
 * @param {object} [data={}] - Optional data to send to the client-side.
 * @param {Function} [cb=null] - Optional callback that handles the response sent back to NUI from the client-side.
 * @throws { Error } - Throws an error if the handle parameter is not a string.
 */
async function sendCallback(handle, data = {}, cb = null) {
  if (typeof handle !== 'string') {
    throw new Error('Error in sendCallback function! param handle should be of type string.');
  }

  try {
    // eslint-disable-next-line no-undef
    const response = await fetch(`https://${GetParentResourceName()}/${handle}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();

    if (cb && typeof cb === 'function') {
      // If callback is provided and is a function, call it with the response data
      cb(responseData);
    }
  } catch (error) {
    console.error('There was a problem with the post request:', error);
  }
}

export default sendCallback;
