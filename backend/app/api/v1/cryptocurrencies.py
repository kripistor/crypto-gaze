from typing import Any, List

from fastapi import APIRouter
from starlette.responses import Response

from app.deps.db import CurrentAsyncSession
from app.deps.request_params import ItemRequestParams

from app.repo.cmc_repo import CMCRepo

router = APIRouter(prefix="/cryptocurrencies")


@router.get("/")
async def get_cryptocurrencies(
        response: Response,
        session: CurrentAsyncSession,
        request_params: ItemRequestParams
) -> Any:
    """Get all cryptocurrencies."""
    cmc_repo: CMCRepo = CMCRepo()
    cryptocurrencies = await cmc_repo.get_listings()
    return cryptocurrencies
