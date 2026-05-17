CREATE TABLE `AdminSecret` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `label` VARCHAR(80) NOT NULL,
  `codeHash` VARCHAR(255) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` DATETIME(3) NOT NULL,
  `lastUsedAt` DATETIME(3) NULL,
  UNIQUE INDEX `AdminSecret_label_key`(`label`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `AdminSession` (
  `id` VARCHAR(191) NOT NULL,
  `tokenHash` VARCHAR(64) NOT NULL,
  `expiresAt` DATETIME(3) NOT NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `lastSeenAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `ipAddress` VARCHAR(80) NULL,
  `userAgent` VARCHAR(255) NULL,
  UNIQUE INDEX `AdminSession_tokenHash_key`(`tokenHash`),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `Lead` (
  `id` VARCHAR(191) NOT NULL,
  `name` VARCHAR(120) NOT NULL,
  `phone` VARCHAR(80) NOT NULL,
  `service` VARCHAR(120) NOT NULL,
  `message` TEXT NOT NULL,
  `source` VARCHAR(80) NOT NULL DEFAULT 'contact-form',
  `status` VARCHAR(40) NOT NULL DEFAULT 'new',
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

CREATE TABLE `AdminLoginAttempt` (
  `id` VARCHAR(191) NOT NULL,
  `success` BOOLEAN NOT NULL,
  `reason` VARCHAR(120) NULL,
  `ipAddress` VARCHAR(80) NULL,
  `userAgent` VARCHAR(255) NULL,
  `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
