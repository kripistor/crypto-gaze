from aiohttp import ClientSession

from app.core.config import settings
class SQLAlchemyRepo:
    """Db abstraction layer"""

    def __init__(self, session):
        self.session = session

class HTTPClient:
    def __init__(self):
        self._session = ClientSession(
            base_url=settings.CMC_BASE_URL,
            headers={
                'X-CMC_PRO_API_KEY': settings.CMC_API_KEY,
            }
        )