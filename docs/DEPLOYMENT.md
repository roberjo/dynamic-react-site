# Deployment Guide

## Overview

This document outlines the deployment process for the Dynamic React Site, including environment setup, infrastructure configuration, and deployment procedures.

## Prerequisites

- AWS Account with appropriate permissions
- AWS CLI configured
- Docker installed
- Node.js v18 or higher
- PostgreSQL client
- Harness account and access

## Environment Setup

### 1. AWS Configuration

#### Required AWS Services
- Lambda
- API Gateway
- S3
- CloudFront
- Route 53
- DynamoDB
- RDS (PostgreSQL)
- CloudWatch
- X-Ray

#### AWS CLI Setup
```bash
aws configure
# Enter your AWS Access Key ID
# Enter your AWS Secret Access Key
# Enter your default region
# Enter your output format (json)
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# AWS Configuration
AWS_REGION=us-east-1
AWS_ACCESS_KEY_ID=your_access_key
AWS_SECRET_ACCESS_KEY=your_secret_key

# Database Configuration
DB_HOST=your_rds_endpoint
DB_PORT=5432
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password

# DynamoDB Configuration
DYNAMODB_TABLE_PREFIX=prod_

# API Configuration
API_VERSION=v1
API_PORT=3000

# Frontend Configuration
VITE_API_URL=https://api.yourdomain.com
VITE_APP_ENV=production

# Security
JWT_SECRET=your_jwt_secret
JWT_EXPIRATION=24h
```

## Infrastructure Setup

### 1. AWS CDK Setup

```bash
# Install AWS CDK
npm install -g aws-cdk

# Initialize CDK project
cd infrastructure
cdk init

# Deploy infrastructure
cdk deploy
```

### 2. Database Setup

```bash
# Create database
psql -h $DB_HOST -U $DB_USER -d postgres -c "CREATE DATABASE $DB_NAME;"

# Run migrations
npm run migrate:up
```

## Deployment Process

### 1. Frontend Deployment

```bash
# Build frontend
cd client
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id your-distribution-id --paths "/*"
```

### 2. Backend Deployment

```bash
# Build backend
cd server
npm run build

# Deploy to Lambda
serverless deploy
```

### 3. Harness Pipeline Setup

1. Create a new pipeline in Harness
2. Configure the following stages:
   - Build
   - Test
   - Deploy to Staging
   - Deploy to Production

#### Pipeline Configuration

```yaml
pipeline:
  name: dynamic-react-site
  stages:
    - name: Build
      type: Build
      steps:
        - name: Install Dependencies
          type: ShellScript
          command: npm install
        - name: Build Frontend
          type: ShellScript
          command: cd client && npm run build
        - name: Build Backend
          type: ShellScript
          command: cd server && npm run build

    - name: Test
      type: Test
      steps:
        - name: Run Tests
          type: ShellScript
          command: npm run test

    - name: Deploy to Staging
      type: Deploy
      steps:
        - name: Deploy Frontend
          type: AWS
          command: aws s3 sync client/dist/ s3://staging-bucket
        - name: Deploy Backend
          type: AWS
          command: serverless deploy --stage staging

    - name: Deploy to Production
      type: Deploy
      steps:
        - name: Deploy Frontend
          type: AWS
          command: aws s3 sync client/dist/ s3://prod-bucket
        - name: Deploy Backend
          type: AWS
          command: serverless deploy --stage prod
```

## Monitoring and Logging

### 1. CloudWatch Setup

- Create log groups for each service
- Set up alarms for critical metrics
- Configure log retention policies

### 2. X-Ray Setup

- Enable X-Ray tracing for Lambda functions
- Configure sampling rules
- Set up service maps

## Scaling Considerations

### 1. Database Scaling

- Enable read replicas for PostgreSQL
- Configure DynamoDB auto-scaling
- Set up connection pooling

### 2. Application Scaling

- Configure Lambda concurrency limits
- Set up API Gateway throttling
- Enable CloudFront caching

## Backup and Recovery

### 1. Database Backups

- Enable automated RDS snapshots
- Configure DynamoDB point-in-time recovery
- Set up cross-region replication

### 2. Application Backups

- Enable S3 versioning
- Configure CloudFront logging
- Set up Route 53 health checks

## Security Measures

### 1. Network Security

- Configure VPC settings
- Set up security groups
- Enable WAF rules

### 2. Application Security

- Enable HTTPS everywhere
- Configure CORS policies
- Set up API key rotation

## Troubleshooting

### Common Issues

1. **Deployment Failures**
   - Check AWS credentials
   - Verify environment variables
   - Review CloudWatch logs

2. **Database Connection Issues**
   - Verify security group settings
   - Check network connectivity
   - Review connection pool settings

3. **Performance Issues**
   - Monitor CloudWatch metrics
   - Check X-Ray traces
   - Review caching configuration

## Support

For deployment support:
- Email: deploy-support@yourdomain.com
- Slack: #deployment-support
- Documentation: https://docs.yourdomain.com/deployment 