USE [CFS_BONDED_WAREHOUSE_History]
GO

/****** Object:  Table [dbo].[trnExportCLP_History]    Script Date: 1/16/2024 11:23:25 AM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportCLPGW_History')
BEGIN
 DROP TABLE [CFS_BONDED_WAREHOUSE_history].[dbo].[trnExportCLPGW_History]
END
GO
IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.TABLES WHERE  TABLE_NAME='trnExportCLP_History')
BEGIN
 DROP TABLE [CFS_BONDED_WAREHOUSE_history].[dbo].[trnExportCLP_History]
END
GO

CREATE TABLE [dbo].[trnExportCLP_History](
	[trnExportCLP_HistoryID] [bigint] IDENTITY(1,1) NOT NULL,
	[trnExportCLPID] [bigint] NOT NULL,
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
	[CLPBeginDateAndTime] [date] NULL,
	[CLPEndDateAndTime] [date] NULL,
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
	[DeleteReason] [varchar](255) NULL,
	[Caption] [varchar](255) NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO

ALTER TABLE [dbo].[trnExportCLP_History] ADD  DEFAULT ((0)) FOR [IsFinished]
GO


