from app.repo.repo import HTTPClient


class CMCRepo(HTTPClient):
    async def get_listings(self):
        async with self._session.get("/v1/cryptocurrency/listings/latest") as resp:
            result = await resp.json()
            return result["data"]