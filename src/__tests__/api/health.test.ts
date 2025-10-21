test('health API responds with status 200', async () => {
	const response = await fetch('/api/health');
	expect(response.status).toBe(200);
});