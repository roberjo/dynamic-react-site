# API Reference

## Base URL

```
https://api.yourdomain.com/v1
```

## Authentication

All API requests require authentication using JWT tokens. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Error Handling

The API uses standard HTTP status codes and returns errors in the following format:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": {} // Optional additional error details
  }
}
```

## Endpoints

### Authentication

#### Register User
```
POST /auth/register
```

Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword",
  "firstName": "John",
  "lastName": "Doe"
}
```

Response:
```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "token": "jwt_token"
}
```

#### Login
```
POST /auth/login
```

Request:
```json
{
  "email": "user@example.com",
  "password": "securepassword"
}
```

Response:
```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "firstName": "John",
    "lastName": "Doe"
  },
  "token": "jwt_token"
}
```

### Products

#### List Products
```
GET /products
```

Query Parameters:
- `page` (number): Page number for pagination
- `limit` (number): Items per page
- `search` (string): Search query
- `category` (string): Filter by category
- `sort` (string): Sort field
- `order` (string): Sort order (asc/desc)

Response:
```json
{
  "products": [
    {
      "id": "product_id",
      "name": "Product Name",
      "description": "Product Description",
      "category": "Category",
      "price": 100.00,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  ],
  "pagination": {
    "total": 100,
    "page": 1,
    "limit": 10,
    "pages": 10
  }
}
```

#### Get Product
```
GET /products/:id
```

Response:
```json
{
  "id": "product_id",
  "name": "Product Name",
  "description": "Product Description",
  "category": "Category",
  "price": 100.00,
  "createdAt": "2024-01-01T00:00:00Z",
  "details": {
    // Product specific details
  }
}
```

#### Create Product (Admin Only)
```
POST /products
```

Request:
```json
{
  "name": "Product Name",
  "description": "Product Description",
  "category": "Category",
  "price": 100.00,
  "details": {
    // Product specific details
  }
}
```

#### Update Product (Admin Only)
```
PUT /products/:id
```

Request:
```json
{
  "name": "Updated Product Name",
  "description": "Updated Description",
  "price": 150.00
}
```

#### Delete Product (Admin Only)
```
DELETE /products/:id
```

### Investment Projections

#### Calculate Projection
```
POST /projections/calculate
```

Request:
```json
{
  "productId": "product_id",
  "startingCapital": 10000,
  "timeFrame": 12, // months
  "additionalParameters": {
    // Optional parameters
  }
}
```

Response:
```json
{
  "projection": {
    "totalReturn": 12000,
    "monthlyBreakdown": [
      {
        "month": 1,
        "value": 10100,
        "return": 100
      }
      // ... more months
    ],
    "summary": {
      "totalReturn": 2000,
      "percentageReturn": 20,
      "annualizedReturn": 15
    }
  }
}
```

### Rate Sheets

#### Generate Rate Sheet
```
POST /rate-sheets/generate
```

Request:
```json
{
  "productId": "product_id",
  "format": "pdf", // or "excel"
  "parameters": {
    // Optional parameters
  }
}
```

Response:
```json
{
  "downloadUrl": "https://storage.yourdomain.com/rate-sheets/sheet_id.pdf",
  "expiresAt": "2024-01-02T00:00:00Z"
}
```

## Rate Limits

- 100 requests per minute for authenticated users
- 20 requests per minute for unauthenticated users
- Rate limit headers are included in all responses:
  - `X-RateLimit-Limit`
  - `X-RateLimit-Remaining`
  - `X-RateLimit-Reset`

## Versioning

The API is versioned through the URL path. The current version is v1. Future versions will be released as v2, v3, etc.

## Webhooks

The API supports webhooks for real-time notifications. Configure webhooks through the admin dashboard or API.

## SDKs

Official SDKs are available for:
- JavaScript/TypeScript
- Python
- Java
- .NET

## Support

For API support, contact api-support@yourdomain.com or visit our API documentation portal. 