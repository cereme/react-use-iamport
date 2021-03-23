export default async function loadScript(script_url: string, script_id: string): Promise<void> {
  return new Promise((resolve, reject) => {
    try {
      const script = document.createElement('script');
      script.id = script_id;
      script.src = script_url;
      script.onload = () => resolve();
      document.head.appendChild(script);
    } catch (e) {
      reject(e);
    }
  });
}
