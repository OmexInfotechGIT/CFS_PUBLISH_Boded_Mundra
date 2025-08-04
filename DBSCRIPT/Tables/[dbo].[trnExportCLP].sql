USE [CFS_BONDED_WAREHOUSE]
GO

/****** Object:  Table [dbo].[trnExportCLP]    Script Date: 01/17/2024 5:21:16 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM [CFS_BONDED_WAREHOUSE].INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportCLP')
BEGIN
 DROP TABLE [CFS_BONDED_WAREHOUSE].[dbo].[trnExportCLP]
END
GO
CREATE TABLE [dbo].[trnExportCLP](
	[trnExportCLPID] [bigint] IDENTITY(1,1) NOT NULL,
	[TransactionType] [varchar](50) NULL,
	[trnExportCLPPrefix] [varchar](20) NULL,
	[trnExportCLPNo] [varchar](255) NULL,
	[ContNo] [varchar](255) NULL,
	[trnExportStufingWOContainerDetailsID] [bigint] NULL,
	[ContSize] [varchar](255) NULL,
	[ContType] [varchar](255) NULL,
	[VCNID] [int] NULL,
	[VCNNo] [varchar](255) NULL,
	[VesselName] [varchar](255) NULL,
	[VOYNo] [varchar](255) NULL,
	[CutoffDate] [varchar](255) NULL,
	[AgentSealNo] [varchar](255) NULL,
	[CustomsSealNo] [varchar](255) NULL,
	[CLPBeginDateAndTime] [datetime] NULL,
	[CLPEndDateAndTime] [datetime] NULL,
	[Contractor] [varchar](255) NULL,
	[ContractorID] [int] NULL,
	[Surveyor] [varchar](255) NULL,
	[SurveyorID] [int] NULL,
	[CargoType] [varchar](255) NULL,
	[CargoTypeID] [int] NULL,
	[ShortShipmentPackages] [varchar](255) NULL,
	[ShortShipmentPieces] [varchar](255) NULL,
	[ShortShipmentWeight] [varchar](255) NULL,
	[Remarks] [varchar](max) NULL,
	[Flagdeleted] [bit] NOT NULL,
	[Createdby] [bigint] NULL,
	[CreatedDate] [datetime] NOT NULL,
	[UpdatedBy] [bigint] NULL,
	[UpdatedDate] [datetime] NULL,
	[IsFinished] [bit] NOT NULL,
	[DeleteReason] [varchar](max) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportCLP] ADD  DEFAULT ((0)) FOR [Flagdeleted]
GO

ALTER TABLE [dbo].[trnExportCLP] ADD  DEFAULT ([dbo].[GetCurrentDateTime]()) FOR [CreatedDate]
GO

ALTER TABLE [dbo].[trnExportCLP] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


